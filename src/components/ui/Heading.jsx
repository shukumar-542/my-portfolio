
// eslint-disable-next-line react/prop-types
const Heading = ({children, className}) => {
    return (
        <h1 className={`bg-gradient-to-r from-[#8A54F7] via-[#BFA2FB] to-[#ECE2FE] inline-block text-transparent bg-clip-text text-3xl lg:text-4xl font-bold  py-5 text-center ${className}`}>
            {children}
        </h1>
    );
};

export default Heading;