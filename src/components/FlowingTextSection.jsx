
import './FlowingTextSection.css'; 

function FlowingTextSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#EF060F] to-[#b60cf2]">
      <div className="relative text-9xl font-extrabold">
        <div className="absolute inset-0 overflow-hidden">
          <div className="h-full w-full flex justify-center items-center text-transparent bg-clip-text bg-gradient-to-r from-[#081A42] to-[#FCD34D] animate-flowing-text">
            Storyverse
          </div>
        </div>
      </div>
    </section>
  );
}

export default FlowingTextSection;
