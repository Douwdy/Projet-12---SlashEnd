const Paragraph = ({ title, children }) => {
    return (
        <div className="paragraph">
            <h1>{title}</h1>
            <p>{children}</p>
        </div>
    );
}

export default Paragraph;