import { FaChevronDown } from "react-icons/fa";

const ArrowDown = ({ targetId }) => {
  const scrollToTarget = () => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div onClick={scrollToTarget} className="flex justify-center cursor-pointer animate-bounce mt-6 text-primary text-4xl bg-black/30 rounded-full p-3 w-14 h-14 mx-auto" aria-label="Scroll to next section" role="button" tabIndex={0} onKeyDown={(e) => e.key === "Enter" && scrollToTarget()}>
      <FaChevronDown />
    </div>
  );
};

export default ArrowDown;
