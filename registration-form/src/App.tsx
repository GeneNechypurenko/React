import React, { useState } from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";
import ErrorMessages from "./ErrorMessages";
import Modal from "./Modal";

interface FormData {
  login: string;
  password: string;
  confirmPassword: string;
  gender: string;
  specialization: string;
  position: string;
}

const App: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    login: "",
    password: "",
    confirmPassword: "",
    gender: "",
    specialization: "",
    position: "",
  });

  const [errors, setErrors] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors: string[] = [];

    if (
      !formData.login ||
      !formData.password ||
      !formData.confirmPassword ||
      !formData.gender ||
      !formData.specialization ||
      !formData.position
    ) {
      newErrors.push("All fields must be filled.");
    }

    if (formData.password.length < 3 || formData.password.length > 10) {
      newErrors.push("Password length must be between 3 and 10 characters.");
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.push("Password and confirmation must match.");
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Registration</h2>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Login"
          type="text"
          name="login"
          value={formData.login}
          onChange={handleChange}
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <InputField
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <SelectField
          label="Gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          options={[
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
          ]}
        />
        <InputField
          label="Specialization"
          type="text"
          name="specialization"
          value={formData.specialization}
          onChange={handleChange}
        />
        <InputField
          label="Position"
          type="text"
          name="position"
          value={formData.position}
          onChange={handleChange}
        />
        {errors.length > 0 && <ErrorMessages errors={errors} />}
        <button
          type="submit"
          className="w-full bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Register
        </button>
      </form>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h3 className="text-xl font-bold mb-4">Submitted Data</h3>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Field</th>
              <th className="px-4 py-2">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Login</td>
              <td className="border px-4 py-2">{formData.login}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Gender</td>
              <td className="border px-4 py-2">{formData.gender}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Specialization</td>
              <td className="border px-4 py-2">{formData.specialization}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Position</td>
              <td className="border px-4 py-2">{formData.position}</td>
            </tr>
          </tbody>
        </table>
      </Modal>
    </div>
  );
};

export default App;
