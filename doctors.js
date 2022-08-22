let doctorsList = [
    {
        name: 'Pascaline Umulisa',
        category: 'hiv'
    },
    {
        name: 'Kayitete Patience',
        category: 'physical'
    },
    {
        name: 'Verite Natete',
        category: 'therapy'
    },
    {
        name: 'Umuhoza Christa',
        category: 'gynacology'
    },
    {
        name: 'Intwaza Belyse',
        category: 'nutrition'
    },
    {
        name: 'Sangwa Nadine',
        category: 'family'
    },
    {
        name: 'Liliane Gikundiro',
        category: 'physical'
    },
    ];
    
    function getItems(category) {
    if (category) {
        let filteredDoctors = doctorsList.filter(item => {
            return item.category === category;
        });
        return filteredDoctors;
    }
    return doctorsList;
    }
    
    doctors = {
    getItems: getItems
    };
    
    module.exports = doctors;