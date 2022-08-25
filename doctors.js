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
        name: 'Umuhoza Christa',
        category: 'gynacology'
    }, {
        name: 'Naima Salim',
        category: 'family'
    },
    {
        name: 'Judy Maina',
        category: 'therapy'
    },
    {
        name: 'Mercy Yugi',
        category: 'gynacology'
    },
    {
        name: 'Nakimuli Susan',
        category: 'hiv'
    },
    {
        name: 'Keza Olivia',
        category: 'nutrition'
    },
    {
        name: 'Phelisia Jeruto',
        category: 'therapy'
    },
    {
        name: 'Henriette Cyuzuzo',
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