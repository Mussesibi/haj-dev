"use client";
export default function Home() {
  function handleClick(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.get("name"));
    console.log(formData.get("email"));
  }

  return (
    <div>
      <h1>Homepage 1</h1>
    </div>
  );
}
