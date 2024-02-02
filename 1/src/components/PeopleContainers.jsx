import React from 'react'

export default function PeopleContainer() {
    let people = [];

useEffect(() => {
    fetch("https://5e391b0baad2220014962337.mockapi.io/swp/person").then(
        (res) => res. json() . then((data) => {
            console. log(data);
            people = data;
        })
        );
    }, []);
    return (
        <div>
            <h1>People</h1>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {people.map(person => {
                return <Card name={person.name} imageUri={person.avatar} title={person.jobtitle}/>
            })}
            </div>
        </div>
    )
}