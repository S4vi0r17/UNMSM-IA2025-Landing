export const FooterSection = () => {
  return (
    <footer id="contacto" className="border-t border-gray-200 bg-white py-8">
      <div className="container mx-auto px-4">
        <p className="text-gray-600 dark:text-gray-100 text-center text-lg">
          &copy; {new Date().getFullYear()} - Universidad Nacional Mayor de San
          Marcos
        </p>
      </div>
    </footer>
  );
};
