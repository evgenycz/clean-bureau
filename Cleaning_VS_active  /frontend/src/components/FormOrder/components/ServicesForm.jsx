export const ServicesForm = ({
    ServState,
    handleCheckbox,
    infoCheckboxes,
    TotalPriceServices,
    handleServicesInfo,
}) => {
    const handleChangeServices = (value) => (event) => {
        const { name, checked } = event.target;
        handleCheckbox({ name, checked });
        TotalPriceServices({ name, checked });
        handleServicesInfo({ checked }, value);
    };

    return Object.entries(...ServState).map(([key, value], index) => (
        <div key={index} className="Services">
            <input
                type="checkbox"
                checked={infoCheckboxes[index]}
                onChange={handleChangeServices(value)}
                name={key}
            />
            <p>{value}</p>
        </div>
    ));
};
