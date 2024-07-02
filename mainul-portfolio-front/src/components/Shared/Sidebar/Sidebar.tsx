import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-6">
      <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
      <nav>
        <ul>
          <li className="mb-4">
            <Link href="/admin/projects">
              <p className="text-lg">Projects</p>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/admin/blogs">
              <p className="text-lg">Blogs</p>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/admin/skills">
              <p className="text-lg">Skills</p>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/admin/experience">
              <p className="text-lg">Experiences</p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
