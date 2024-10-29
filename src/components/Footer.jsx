export default function Footer() {
  return (
    <footer className="mt-4 bg-dark p-2">
      {/* Making the year of the copyright dynamically: {new Date().getFullYear()}*/}
      <p className="text-center text-light ">
        Copyright &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
}
