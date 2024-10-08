import { useGlobalContext } from '../context/Context';
import { AiOutlineUser, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import avatar from '../assets2/ava.jpg';


const SOverview = () => {
  const { staff } = useGlobalContext();

  if (!staff) {
    return <p>Loading...</p>; 
  }

  return (
    <div>
     
      <div className="mt-10 mb-10 ml-4 md:ml-60 rounded-2xl bg-indigo-200 min-h-screen p-4">
      <h3 className="text-xl font-bold mb-4 text-gray-800">Staff Info</h3>
        {staff.map((member) => (
          <div key={member.id} className="bg-white p-4 rounded-lg shadow-md mb-6 flex flex-col md:flex-row items-center md:items-start">
            <img src={avatar} className="w-24 h-24 md:w-32 md:h-32 rounded-md mb-4 md:mb-0" alt="" />
            <div className="md:ml-4">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Staff Details</h3>
              <div className="flex items-center mb-2">
                <AiOutlineUser className="text-[#7695FF] mr-2 text-2xl" />
                <p className="text-lg font-semibold text-gray-800">Name: {member.name}</p>
              </div>
              <div className="flex items-center mb-2">
                <AiOutlineMail className="text-[#7695FF] mr-2 text-2xl" />
                <p className="text-lg font-semibold text-gray-800">Email: {member.email}</p>
              </div>
              <div className="flex items-center mb-2">
                <AiOutlinePhone className="text-[#7695FF] mr-2 text-2xl" />
                <p className="text-lg font-semibold text-gray-800">Phone: {member.phone}</p>
              </div>
              <div className="flex items-center mb-2">
                <p className="text-lg font-semibold text-gray-800">Department: {member.department}</p>
              </div>
              <div className="flex items-center mb-2">
                <p className="text-lg font-semibold text-gray-800">Role: {member.role}</p>
              </div>
            </div>
          </div>
          
        ))}
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">Staff Overview</h2>

       
<div className="bg-white p-4 rounded-lg shadow-md mb-6">
  <h3 className="text-xl font-semibold mb-4 text-gray-800">Staff Summary</h3>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div className="flex items-center p-4 bg-[#FF9874] text-white rounded-lg shadow-md">
      <AiOutlineUser className="text-2xl mr-3" />
      <p className="text-lg font-semibold">Total Staff: {staff.length}</p>
    </div>
    <div className="flex items-center p-4 bg-[#7695FF] text-white rounded-lg shadow-md">
      <AiOutlineUser className="text-2xl mr-3" />
      <p className="text-lg font-semibold">Available Staff: {staff.filter(member => member.available).length}</p>
    </div>
    <div className="flex items-center p-4 bg-[#7695FF] text-white rounded-lg shadow-md">
      <AiOutlineUser className="text-2xl mr-3" />
      <p className="text-lg font-semibold">Unavailable Staff: {staff.filter(member => !member.available).length}</p>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default SOverview;
