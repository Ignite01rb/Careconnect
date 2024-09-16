// import { useState, useEffect } from 'react';
// import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';

// // Initial Patient Data
// const initialPatients = [
//   { id: 1, name: 'John Doe', age: 25, department: 'Cardiology', number: '1234567890' },
//   { id: 2, name: 'Jane Smith', age: 45, department: 'Neurology', number: '0987654321' },
//   { id: 3, name: 'Sara Connor', age: 30, department: 'Orthopedics', number: '1230984567' },
// ];

// const OverallPatients = () => {
//   const [patients, setPatients] = useState(() => {
//     const storedPatients = localStorage.getItem('overallPatients');
//     return storedPatients ? JSON.parse(storedPatients) : initialPatients;
//   });

//   const [newPatient, setNewPatient] = useState({ name: '', age: '', department: '', number: '' });
//   const [filterDepartment, setFilterDepartment] = useState('');
//   const [sortByAge, setSortByAge] = useState(false);

//   useEffect(() => {
//     localStorage.setItem('overallPatients', JSON.stringify(patients));
//   }, [patients]);

//   // Handle Add Patient
//   const handleAddPatient = () => {
//     if (newPatient.name.trim() && newPatient.age.trim() && newPatient.department.trim()) {
//       const newPatientData = {
//         id: patients.length ? Math.max(...patients.map(p => p.id)) + 1 : 1,
//         ...newPatient,
//         age: parseInt(newPatient.age),
//       };
//       setPatients(prevPatients => [...prevPatients, newPatientData]);
//       setNewPatient({ name: '', age: '', department: '', number: '' });
//     }
//   };

//   // Handle Delete Patient
//   const handleDeletePatient = (id) => {
//     setPatients(prevPatients => prevPatients.filter(patient => patient.id !== id));
//   };

//   // Filter by Department
//   const filteredPatients = filterDepartment
//     ? patients.filter(patient => patient.department === filterDepartment)
//     : patients;

//   // Sort by Age
//   const sortedPatients = sortByAge
//     ? [...filteredPatients].sort((a, b) => a.age - b.age)
//     : filteredPatients;

//   return (
//     <div className="p-6 mt-10 mb-10 ml-20 md:ml-60 md:mr-10 rounded-2xl bg-indigo-100 min-h-screen">
//       <h2 className="text-3xl font-bold mb-6 text-gray-800">Overall Patient Management</h2>

//       {/* Add New Patient Section */}
//       <div className="bg-white p-4 rounded-lg shadow-md mb-6">
//         <h3 className="text-xl font-semibold mb-4">Add New Patient</h3>
//         <input
//           type="text"
//           className="border border-[#9DBDFF] p-2 rounded-lg mb-2 w-full bg-white text-sm"
//           placeholder="Patient Name"
//           value={newPatient.name}
//           onChange={(e) => setNewPatient(prev => ({ ...prev, name: e.target.value }))}
//         />
//         <input
//           type="number"
//           className="border border-[#9DBDFF] p-2 rounded-lg mb-2 w-full bg-white text-sm"
//           placeholder="Age"
//           value={newPatient.age}
//           onChange={(e) => setNewPatient(prev => ({ ...prev, age: e.target.value }))}
//         />

//         {/* Dropdown for Department */}
//         <select
//           className="border border-[#9DBDFF] p-2 rounded-lg mb-2 w-full bg-white text-sm"
//           value={newPatient.department}
//           onChange={(e) => setNewPatient(prev => ({ ...prev, department: e.target.value }))}
//         >
//           <option value="">Select Department</option>
//           <option value="Cardiology">Cardiology</option>
//           <option value="Neurology">Neurology</option>
//           <option value="Orthopedics">Orthopedics</option>
//           <option value="Pediatrics">Pediatrics</option>
//           <option value="Oncology">Oncology</option>
//           {/* Add more departments as needed */}
//         </select>

//         <input
//           type="text"
//           className="border border-[#9DBDFF] p-2 rounded-lg mb-2 w-full bg-white text-sm"
//           placeholder="Contact Number"
//           value={newPatient.number}
//           onChange={(e) => setNewPatient(prev => ({ ...prev, number: e.target.value }))}
//         />
//         <button
//           onClick={handleAddPatient}
//           className="bg-[#7695FF] text-white p-2 rounded-lg shadow-md hover:bg-[#6A7DFF] transition-transform"
//         >
//           Add Patient
//         </button>
//       </div>

//       {/* Filters and Sort Section */}
//       <div className="flex justify-between mb-6">
//         {/* Filter by Department */}
//         <div>
//           <label className="block text-gray-700 mb-2">Filter by Department:</label>
//           <select
//             className="border border-[#9DBDFF] p-2 rounded-lg bg-white"
//             value={filterDepartment}
//             onChange={(e) => setFilterDepartment(e.target.value)}
//           >
//             <option value="">All Departments</option>
//             <option value="Cardiology">Cardiology</option>
//             <option value="Neurology">Neurology</option>
//             <option value="Orthopedics">Orthopedics</option>
//             <option value="Pediatrics">Pediatrics</option>
//             <option value="Oncology">Oncology</option>
//           </select>
//         </div>

//         {/* Sort by Age */}
//         <div>
//           <label className="block text-gray-700 mb-2">Sort by Age:</label>
//           <button
//             className="bg-[#7695FF] text-white p-2 rounded-lg shadow-md hover:bg-[#6A7DFF] transition-transform"
//             onClick={() => setSortByAge(prev => !prev)}
//           >
//             {sortByAge ? 'Oldest to Youngest' : 'Youngest to Oldest'}
//           </button>
//         </div>
//       </div>

//       {/* Patient List Section */}
//       <div className="bg-white rounded-lg shadow-md overflow-auto">
//         <h3 className="text-xl font-semibold px-4 pt-4 mb-4 text-gray-800">Patient List</h3>
//         <table className="w-full table-auto border-collapse">
//           <thead>
//             <tr className="bg-[#7695FF] text-white">
//               <th className="border p-2">Name</th>
//               <th className="border p-2">Age</th>
//               <th className="border p-2">Department</th>
//               <th className="border p-2">Contact</th>
//               <th className="border p-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {sortedPatients.map((patient) => (
//               <tr
//                 key={patient.id}
//                 className="hover:bg-gray-200 cursor-pointer"
//               >
//                 <td className="border p-2">{patient.name}</td>
//                 <td className="border p-2">{patient.age}</td>
//                 <td className="border p-2">{patient.department}</td>
//                 <td className="border p-2">{patient.number}</td>
//                 <td className="border p-2 flex space-x-2">
//                   <button
//                     className="bg-[#FFD7C4] text-[#FF9874] p-1 rounded-lg shadow-md hover:bg-[#FF9874] hover:text-white transition-transform"
//                     onClick={() => alert('Edit functionality not implemented')}
//                   >
//                     <AiOutlineEdit />
//                   </button>
//                   <button
//                     className="bg-[#FF9874] text-white p-1 rounded-lg shadow-md hover:bg-[#FF6F6F] transition-transform"
//                     onClick={() => handleDeletePatient(patient.id)}
//                   >
//                     <AiOutlineDelete />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default OverallPatients;
