import Image from 'next/image';

const tools = [
    {
        name: 'Notion',
        description: 'Wiki, docs and projects',
        logo: '/images/notion.svg',
    },
    {
        name: 'Figma',
        description: 'Design Tool',
        logo: '/images/figma.avif',
    },
    {
        name: 'Fathom',
        description: 'Web Analytics',
        logo: '/images/fathom.svg',
    },
    {
        name: 'Framer',
        description: 'Website Builder',
        logo: '/images/framer.avif',
    },
    {
        name: 'Relume',
        description: 'No-code AI Site Builder',
        logo: '/images/relume.avif',
    },
    {
        name: 'Webflow',
        description: 'Website Builder',
        logo: '/images/webflow.avif',
    },
    {
        name: 'ChatGPT',
        description: 'Artificial Intelligence',
        logo: '/images/chatgpt.svg',
    },
    {
        name: 'ProtoPie',
        description: 'Prototype Tool',
        logo: '/images/protopie.svg',
    },
    {
        name: 'Hotjar',
        description: 'Behaviour Tool',
        logo: '/images/hotjar.svg',
    },
    {
        name: 'VWO',
        description: 'A/B Testing',
        logo: '/images/vwo.avif',
    },
];

const ToolsSection = () => {
    return (
        <div className="flex w-full flex-col items-start lg:items-center rounded-lg bg-[#f5f4ef]">
            <div className="flex flex-wrap gap-10 p-4 py-16 flex-col sm:flex-row">
                {tools.map((tool) => (
                    <div
                        key={tool.name}
                        className="flex flex-row sm:flex-row items-center rounded-lg text-white space-x-4 space-y-4 sm:space-y-0"
                    >
                        <div className="relative w-10 h-10">
                            <Image
                                src={tool.logo}
                                alt={tool.name}
                                layout="fill"
                                objectFit="contain"
                                className="rounded-lg"
                            />
                        </div>
                        <div className="p-2 flex w-fit flex-col rounded-md bg-[#3e3d3b]">
                            <h3 className="lg:text-md w-fit text-xs font-medium">{tool.name}</h3>
                            <p className="text-xs w-fit text-gray-300">{tool.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ToolsSection;
