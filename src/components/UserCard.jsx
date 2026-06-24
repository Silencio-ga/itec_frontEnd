function UserCard({ name, email, phone }) {
  return (
    <div className="w-full text-black bg-gray-100 border border-gray-300 rounded-2xl p-4 m-4 shadow-lg">
      <section className="flex items-center gap-2">
        <div className="w-12 h-12 bg-emerald-400 flex items-center justify-center rounded-full text-white font-bold text-xl">
          {name ? name.charAt(0).toUpperCase() : ""}
        </div>
        <div className="text-start">
          <p>{name}</p>
          <p className="text-gray-500">{email}</p>
        </div>
      </section>
      <section className="mt-4 border-t border-gray-200 text-gray-600">
        <p className="mt-4 text-sm">
          Teléfono: <span className="text-md font-bold">{phone}</span>
        </p>
      </section>
    </div>
  );
}

export default UserCard;
