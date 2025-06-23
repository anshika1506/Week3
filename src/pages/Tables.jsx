import React from 'react';

export default function Tables() {
  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">User Table</h2>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border p-3">Name</th>
            <th className="border p-3">Email</th>
            <th className="border p-3">Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-3">Alice</td>
            <td className="border p-3">alice@example.com</td>
            <td className="border p-3">Admin</td>
          </tr>
          <tr>
            <td className="border p-3">Bob</td>
            <td className="border p-3">bob@example.com</td>
            <td className="border p-3">Editor</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
