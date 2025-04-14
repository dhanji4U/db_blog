import React from 'react'

const Loader = () => {
    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-900" />
            </div>
        </>
    )
}

export default Loader
