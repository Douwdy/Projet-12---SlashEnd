const Strip = (angle) => {
    const transformAngle = {
        transform: `rotate(${angle.angle}deg)`
    };

    return (
        <div className="strip" style={transformAngle}>
            <div className="strip__inner">
            
            </div>
        </div>
    );
};

export default Strip;