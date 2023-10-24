function CardResult({result={}}) {

    return (
        <div className="card-body">
            <div className="card-container row">
                    <div className="card-main">
                        <span></span>
                        <div className="content">
                            <h2>SỐ CHỦ ĐẠO</h2>
                            <h1>{result.lifePathResponseDTO?.number}</h1>
                            <p>{result.lifePathResponseDTO?.title}</p>
                        </div>
                    </div>
                    <div className="card-main">
                        <span></span>
                        <div className="content">
                            <h2>SỐ SỨ MỆNH </h2>
                            <h1>{result.missionNumberResponseDtTO?.number}</h1>
                            <p>{result.missionNumberResponseDtTO?.title}</p>
                        </div>
                    </div>
                    <div className="card-main">
                        <span></span>
                        <div className="content">
                            <h2>SỐ THÁI ĐỘ</h2>
                            <h1>{result.attitudeNumberResponseDTO?.number}</h1>
                            <p>{result.attitudeNumberResponseDTO?.title}</p>
                        </div>
                    </div>
            </div>

        </div>
    );
}

export default CardResult;