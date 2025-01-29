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
      <form onSubmit={handleClick}>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <input type="text" name="email" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
