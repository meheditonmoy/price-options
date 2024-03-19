import PriceOpt from "../priceOpt/PriceOpt";

const PriceOption = () => {
    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": 29.99,
            "features": [
                "Access to cardio area",
                "Access to weightlifting area",
                "Locker usage",
                "Basic equipment usage"
            ]
        },
        {
            "id": 2,
            "name": "Premium Membership",
            "price": 49.99,
            "features": [
                "Access to all gym facilities",
                "Group fitness classes included",
                "Personal trainer sessions (limited)",
                "Free towel service",
                "Access to sauna"
            ]
        },
        {
            "id": 3,
            "name": "Gold Membership",
            "price": 79.99,
            "features": [
                "Access to all gym facilities",
                "Unlimited group fitness classes",
                "Personal trainer sessions (unlimited)",
                "Sauna and steam room access",
                "Discounts on gym merchandise",
                "Priority booking for fitness classes"
            ]
        },
        {
            "id": 4,
            "name": "Student Membership",
            "price": 19.99,
            "features": [
                "Access to cardio area",
                "Access to weightlifting area",
                "Locker usage",
                "Valid student ID required",
                "Discounts on student lockers"
            ]
        }
    ]

    return (
        <div className="m-12 ">
            <h2 className="text-5xl mb-4">Best price in the hole Town.</h2>
            <div className="grid md:grid-cols-3">
                {
                    priceOptions.map(option => <PriceOpt key={option.id} option={option}></PriceOpt>)
                }
            </div>
        </div>
    );
};

export default PriceOption;