"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ExperienceForm from "@/components/ExperienceForm";

const ExperiencesAdmin = () => {
  const [experiences, setExperiences] = useState([]);
  const [editingExperience, setEditingExperience] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/admin/login");
    } else {
      fetchExperiences(token);
    }
  }, []);

  const fetchExperiences = async (token:any) => {
    const res = await fetch("https://mainul-portfolio.vercel.app/api/experiences", {
      headers: {
        Authorization: `${token}`,
      },
    });
    const data = await res.json();
    setExperiences(data);
  };

  const handleEdit = (experience:any) => {
    setEditingExperience(experience);
  };

  const handleDelete = async (id:any) => {
    const token = localStorage.getItem("token");
    await fetch(`https://mainul-portfolio.vercel.app/api/experiences/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `${token}`,
      },
    });
    // @ts-ignore
    setExperiences(experiences.filter((experience) => experience._id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Manage Experiences</h1>
      <ExperienceForm
        editingExperience={editingExperience}
        setEditingExperience={setEditingExperience}
        setExperiences={setExperiences}
      />
      <div className="mt-6">
        {experiences.map((experience) => (
          // @ts-ignore
          <div key={experience._id} className="mb-4 p-4 border rounded">
            {/* @ts-ignore */}
            <h3 className="text-xl font-bold">{experience.position}</h3>
            {/* @ts-ignore */}
            <p>{experience.company}</p>
            <button
              onClick={() => handleEdit(experience)}
              className="mr-2 mt-2 bg-yellow-500 text-white px-4 py-2 rounded"
            >
              Edit
            </button>
            <button
            // @ts-ignore
              onClick={() => handleDelete(experience._id)}
              className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperiencesAdmin;
