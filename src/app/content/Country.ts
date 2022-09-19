

export interface Country{
    altSpellings : string[];
    area : number;
    borders : string[];
    capital : string[];
    capitalInfo : {
        latlng : number[];
    }
    car : {
        side : string;
        signs : string[];
    }
    cca2 : string;
    ccn3 : string;
    cca3 : string;
    cion : string;
    coatOfArms :{
        png : string;
        svg : string;
    }
    continents : string[];
    currencies : Object;
    demonyms : {
        eng: {
            f :string;
            m: string;
        };
        fra: {
            f :string;
            m: string;
        }
    }
    fifa :string;
    flag : String;
    flags : {
        svg : String;
        png: String
    };

    idd : {
        root :string;
        suffixes : string[];

    };

    independent : boolean;
    landlocked : boolean;
    languages : Object;

    latlang : number[];
    maps : {
        googleMaps : string;
        openStreetMaps : string;
    }

    name : {
        common: string;
        official: string;
        nativename: {
            eng : {
                official: string;
                common : string;
            }
        }
    }
    population : number;
    postalCode : {
        format : string;
        regex : string;
    }
    region : string;
    startOfWeek : string;
    status : string;
    subregion : String;
    timezones : string[];
    tld : string[];
    translations : {
        era : {
            official : string;
            common : string;
        };
        bre : {
            official : string;
            common : string;
        };
        ces : {
            official : string;
            common : string;
        };
        cym : {
            official : string;
            common : string;
        };
        deu : {
            official : string;
            common : string;
        };
        est : {
            official : string;
            common : string;
        };
        fin : {
            official : string;
            common : string;
        };
        fra : {
            official : string;
            common : string;
        };
        hrv : {
            official : string;
            common : string;
        };
        hun : {
            official : string;
            common : string;
        };
        ita : {
            official : string;
            common : string;
        };
        jpn : {
            official : string;
            common : string;
        };
        kor : {
            official : string;
            common : string;
        };
        nld : {
            official : string;
            common : string;
        };
        per : {
            official : string;
            common : string;
        };
        pol : {
            official : string;
            common : string;
        };
        por : {
            official : string;
            common : string;
        };
        rus : {
            official : string;
            common : string;
        };
        slk : {
            official : string;
            common : string;
        };
        spa : {
            official : string;
            common : string;
        };
        swe : {
            official : string;
            common : string;
        };
        tur : {
            official : string;
            common : string;
        };
        urd : {
            official : string;
            common : string;
        };
        zho : {
            official : String;
            common : String;
        };  
    };
    unMember : boolean;
}