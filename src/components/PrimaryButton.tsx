import React from 'react';

const PrimaryButton = ({ action = 'Add' }: { action: string }) => {
    return (
        <div>
            <button>Click to {action}</button>
        </div>
    );
};

export default PrimaryButton;