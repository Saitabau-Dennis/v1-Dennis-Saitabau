import SectionContainer from "./sectioncontainer";

export default function Stats() {
  const stats = [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Shipped", value: "50+" },
    { label: "Awards Won", value: "12" },
    { label: "Happy Clients", value: "30+" },
  ];

  return (
    <SectionContainer className="border-y-0 bg-transparent ring-0" withSeparator={false}>
      <div className="container mx-auto max-w-7xl px-0">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center text-center">
              <dt className="order-2 mt-2 text-sm font-medium leading-6 text-zinc-500 font-mono uppercase tracking-wider whitespace-nowrap">
                {stat.label}
              </dt>
              <dd className="order-1 text-4xl font-medium tracking-tight text-white sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
