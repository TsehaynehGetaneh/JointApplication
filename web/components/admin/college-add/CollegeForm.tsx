// import { University } from '@/types/university';
// import { useState } from 'react';

// interface UniversityFormProps {
//   onSubmit: (data: University) => void;
// }

// const UniversityForm: React.FC<UniversityFormProps> = ({ onSubmit }) => {
//   const [universityData, setUniversityData] = useState<University>({
//     name: '',
//     phone: '',
//     email: '',
//     address: '',
//     links: '',
//     deadlines: [],
//     applicationFees: [],
//     additionalInfo: '',
//     academicPrograms: [],
//     images: "",
//   });

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setUniversityData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleDeadlineChange = (index: number, field: keyof Deadline, value: string) => {
//     setUniversityData((prevData) => {
//       const deadlines = [...prevData.deadlines];
//       deadlines[index] = {
//         ...deadlines[index],
//         [field]: value,
//       };
//       return {
//         ...prevData,
//         deadlines,
//       };
//     });
//   };

//   const handleApplicationFeeChange = (index: number, field: keyof ApplicationFee, value: string) => {
//     setUniversityData((prevData) => {
//       const applicationFees = [...prevData.applicationFees];
//       applicationFees[index] = {
//         ...applicationFees[index],
//         [field]: value,
//       };
//       return {
//         ...prevData,
//         applicationFees,
//       };
//     });
//   };

//   const handleImageUpload = (field: keyof Images) => (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.onload = () => {
//       setUniversityData((prevData) => ({
//         ...prevData,
//         images: {
//           ...prevData.images,
//           [field]: {
//             url: reader.result as string,
//             _id: '', // You can set the ID based on your requirements
//           },
//         },
//       }));
//     };
//     reader.readAsDataURL(file);
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     onSubmit(universityData);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input type="text" name="name" value={universityData.name} onChange={handleInputChange} />
//       </label>
//       {/* Add other input fields for the remaining properties */}
//       <label>
//         Logo:
//         <input type="file" accept="image/*" onChange={handleImageUpload('logo')} />
//         {universityData.images.logo.url && (
//           <img src={universityData.images.logo.url} alt="Logo" style={{ width: '200px' }} />
//         )}
//       </label>
//       <label>
//         Inside Campus:
//         <input type="file" accept="image/*" onChange={handleImageUpload('insideCampus')} />
//         {universityData.images.insideCampus.url && (
//           <img src={universityData.images.insideCampus.url} alt="Inside Campus" style={{ width: '200px' }} />
//         )}
//       </label>
//       <label>
//         Campus Gate:
//         <input type="file" accept="image/*" onChange={handleImageUpload('campusGate')} />
//         {universityData.images.campusGate.url && (
//           <img src={universityData.images.campusGate.url} alt="Campus Gate" style={{ width: '200px' }} />
//         )}
//       </label>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default UniversityForm;
