import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../hooks/useAxiosPublic';

const Forums = () => {
  const axiosPublic = useAxiosPublic();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const { data: forumPosts, refetch } = useQuery({
    queryKey: ['allForumPosts'],
    queryFn: async () => {
      const res = await axiosPublic.get('/forumPost');
      return res.data;
    },
  });

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = forumPosts?.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate page numbers
  const pageNumbers = [];
  if (forumPosts) {
    for (let i = 1; i <= Math.ceil(forumPosts.length / postsPerPage); i++) {
      pageNumbers.push(i);
    }
  }

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {currentPosts?.map((post) => (
          <div
            key={post._id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-bold text-gray-800">
                  {post.title}
                </h2>
                {post.role && (
                  <span
                    className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      post.role === 'admin'
                        ? 'bg-red-500 text-white'
                        : 'bg-blue-500 text-white'
                    }`}
                  >
                    {post.role === 'admin' ? 'Admin' : 'Trainer'}
                  </span>
                )}
              </div>
              <p className="text-gray-600 mb-4">{post.content}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{post.name}</span>
                <span>{post.email}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <nav>
          <ul className="flex space-x-2">
            {pageNumbers.map((number) => (
              <li key={number}>
                <button
                  onClick={() => paginate(number)}
                  className={`px-3 py-1 rounded ${
                    currentPage === number
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  {number}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Forums;
