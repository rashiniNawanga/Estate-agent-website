// Importing images for House 1
import H1room1 from './assets/images/House_1/H1Room.jpeg';
import H1front1 from './assets/images/House_1/H1front_1.jpeg';
import H1front2 from './assets/images/House_1/H1Front.jpeg';
import H1bathroom from './assets/images/House_1/H1Bathroom.jpeg';
import H1kitchen from './assets/images/House_1/H1Kitchen.jpeg';
import H1room2 from './assets/images/House_1/H1room_2.jpeg';
import H1garden from './assets/images/House_1/H1garden.jpeg';
import H1floorP from './assets/images/House_1/floorPlan-1.png';

// Importing images for House 2
import H2bedroom from './assets/images/House_2/bedroom.jpg';
import H2kitchen from './assets/images/House_2/kitchen.jpg';
import H2front from './assets/images/House_2/front.jpg';
import H2gate from './assets/images/House_2/gate.jpg';
import H2garden from './assets/images/House_2/garden.jpg';
import H2living from './assets/images/House_2/living2.jpg';
import H2bathroom from './assets/images/House_2/bathroom.jpg';
import H2floorP from './assets/images/House_2/floorP.png';

// Importing images for House 3
import H3room1 from './assets/images/House_3/room.jpeg';
import H3front1 from './assets/images/House_3/front1.jpeg';
import H3living2 from './assets/images/House_3/living2.jpeg';
import H3living from './assets/images/House_3/living.jpeg';
import H3room2 from './assets/images/House_3/room2.jpeg';
import H3garden from './assets/images/House_3/garden.jpeg';
import H3front2 from './assets/images/House_3/front2.jpeg';
import H3floorP from './assets/images/House_3/floorP.jpg';

// Importing images for House 4
import H4room1 from './assets/images/House_4/room.jpeg';
import H4front1 from './assets/images/House_4/front.jpeg';
import H4living from './assets/images/House_4/living.jpeg';
import H4bathroom from './assets/images/House_4/bathroom.jpeg';
import H4kitchen from './assets/images/House_4/kitchen.jpeg';
import H4garden from './assets/images/House_4/garden.jpeg';
import H4floorP from './assets/images/House_4/floorP.jpg';

// Importing images for Bungalow 1
import B1relax from './assets/images/Banglow_1/relax.jpeg';
import B1front1 from './assets/images/Banglow_1/front.jpeg';
import B1living from './assets/images/Banglow_1/living.jpeg';
import B1garden2 from './assets/images/Banglow_1/garden2.jpeg';
import B1kitchen from './assets/images/Banglow_1/kitchen.jpeg';
import B1room from './assets/images/Banglow_1/room.jpeg';
import B1garden from './assets/images/Banglow_1/garden.jpeg';
import B1living2 from './assets/images/Banglow_1/living2.jpeg';
import B1floorP from './assets/images/Banglow_1/floorP.jpg';

// Importing images for Bungalow 2
import B2living from './assets/images/Banglow_2/living.jpeg';
import B2front1 from './assets/images/Banglow_2/front1.jpeg';
import B2front2 from './assets/images/Banglow_2/front2.jpeg';
import B2bathroom from './assets/images/Banglow_2/bathroom.jpeg';
import B2kitchen from './assets/images/Banglow_2/kitchen.jpeg';
import B2room from './assets/images/Banglow_2/room.jpeg';
import B2garden from './assets/images/Banglow_2/garden.jpeg';
import B2floorP from './assets/images/Banglow_2/floorP.png';

// Importing images for Flat 1
import F1front3 from './assets/images/Flat_1/Flatfront3.jpeg';
import F1front1 from './assets/images/Flat_1/Flatfront1.jpeg';
import F1front2 from './assets/images/Flat_1/Flatfront2.jpeg';
import F1house from './assets/images/Flat_1/Flathouse.jpeg';
import F1kitchen from './assets/images/Flat_1/Flatkitchen.jpeg';
import F1view1 from './assets/images/Flat_1/Flatview.jpeg';
import F1view2 from './assets/images/Flat_1/Flatview2.jpeg';
import F1floorP from './assets/images/Flat_1/floorP.png';



export const backendjson = {
    //Flat 1
    "properties": [{
        "id":"prop1",
        "type":"Flat",
        "bedrooms":1,
        "bathrooms":1,
        "price":200000,
        "tenure":"Freehold",
        "description":"This charming one-bedroom, ground-floor maisonette is located within the prestigious Dedham Mill complex on the banks of the River Stour, with use of the surrounding parkland, boat storage area, and jetty for launching directly onto the river. Dedham Mill and Lock was once owned by the father of the famous landscape artist John Constable, and was converted in the mid-1980s to provide a mix of apartments and townhouses within a private, gated development...",
        "location":"Dedham Mill, Colchester",
        "picture":F1front1,
        "floorPlan":F1floorP,
        "map":"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d526.9131132352039!2d0.9934066!3d51.9600757!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d908eea143da73%3A0x488473bf2eae57f7!2sMill%20Ln%2C%20Dedham%2C%20Colchester%2C%20UK!5e1!3m2!1sen!2slk!4v1704885023476!5m2!1sen!2slk",
        "url":"properties/prop1.html",
        "added": {
            "month":"October",
            "day":12,
            "year":2023
        },
        "postalCode": "30",
        "images":[F1front1,F1front2,F1front3,F1house,F1kitchen,F1view1,F1view2]
        
    },

    //House 1
    {
        "id":"prop2",
        "type":"House",
        "bedrooms":3,
        "bathrooms":1,
        "price":200000,
        "tenure":"Freehold",
        "description":"Discover the epitome of contemporary living with this impeccably presented three-bedroom, one-bathroom house on Crofton Road, Orpington. Boasting an excellent decorative order throughout, this residence invites you into a world of comfort and style. As you enter, you'll be captivated by the seamless blend of modern design and functionality. The open-plan layout features a modern fitted kitchen that effortlessly flows into the living room, adorned with solid wooden floors. Integrated appliances, including a dishwasher and a washing machine, add convenience to your daily routine. The spacious living area opens up to a secluded private courtyard garden through bi-folding doors, creating a perfect space for relaxation and entertainment. All three bedrooms are generously sized, ensuring comfort for family and guests...",
        "location":"Crofton Road Orpington BR6",
        "picture":H1front1,
        "floorPlan":H1floorP,
        "map":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2489.6746028107646!2d0.07950867661309262!3d51.390658271787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8ab82cc8f3cb1%3A0xc746da03b0c6c716!2sPetts%20Wood%20Rd%2C%20Petts%20Wood%2C%20Orpington%2C%20UK!5e0!3m2!1sen!2slk!4v1704225258754!5m2!1sen!2slk",
        "url":"properties/prop2.html",
        "added": {
            "month":"September",
            "day":14,
            "year":2023
        },
        "postalCode": "45",
        "images":[H1front1,H1front2,H1room1,H1room2,H1bathroom,H1garden,H1kitchen]
    },

    //House 2
    {
        "id":"prop3",
        "type":"House",
        "bedrooms":4,
        "bathrooms":2,
        "price":400000,
        "tenure":"Freehold",
        "description":"Discover unparalleled comfort and contemporary living in this meticulously maintained four-bedroom, two-bathroom house on Crofton Road, Orpington. The property is presented in impeccable decorative order throughout, promising a harmonious blend of style and functionality. Step into the heart of the home, where a modern fitted kitchen seamlessly integrates with the spacious living room. Adorned with solid wooden floors, the living area features bi-folding doors that open onto a secluded private courtyard garden. The kitchen is equipped with top-of-the-line integrated appliances, including a dishwasher and a washing machine, making daily chores a breeze. All four bedrooms are generously sized, offering ample space for relaxation. The family bathroom boasts a matching three-piece suite with a convenient shower attachment over the bath, while an additional wet room adds extra convenience...",
        "location":"Holton St Mary, Colchester",
        "picture":H2front,
        "floorPlan":H2floorP,
        "map":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2538.7631817078136!2d0.9901400949252532!3d51.992411904296645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d9084112515adb%3A0xbec6db1f8e41bd52!2sHolton%20park%2C%20Colchester%20CO7%206NN%2C%20UK!5e1!3m2!1sen!2slk!4v1704884417876!5m2!1sen!2slk",
        "url":"properties/prop3.html",
        "added": {
            "month":"August",
            "day":20,
            "year":2023
        },
        "postalCode": "60",
        "images":[H2front,H2bedroom,H2gate,H2bathroom,H2garden,H2living,H2kitchen]
    },

    //House 3
    {
        "id":"prop4",
        "type":"House",
        "bedrooms":2,
        "bathrooms":1,
        "price":100000,
        "tenure":"Freehold",
        "description":"Immerse yourself in the charm of this two-bedroom, one-bathroom house on Crofton Road, Orpington. Meticulously maintained and presented in excellent decorative order, this residence is a testament to stylish and comfortable living. As you step inside, you'll be greeted by an inviting open-plan design, where a modern fitted kitchen seamlessly integrates with the living room. Revel in the beauty of solid wooden floors and the convenience of integrated appliances, including a dishwasher and a washing machine. The large open plan extends seamlessly to a private courtyard garden through bi-folding doors, providing a tranquil outdoor retreat. Both bedrooms are generously sized, offering double-sized comfort. The family bathroom features a matching three-piece suite with a shower attachment over the bath, while an additional separate wet room adds to the convenience of this thoughtfully designed home...",
        "location":"Graystonber Ln, Lancaster",
        "picture":H3front1,
        "floorPlan":H3floorP,
        "map":"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1045.1169188136278!2d-2.3557084!3d54.1098799!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487c79b234a7d6af%3A0x77a2c80de09f95cc!2sGraystonber%20Ln%2C%20Lancaster%20LA2%208BY%2C%20UK!5e1!3m2!1sen!2slk!4v1704885107983!5m2!1sen!2slk",
        "url":"properties/prop4.html",
        "added": {
            "month":"April",
            "day":10,
            "year":2023
        },
        "postalCode": "75",
        "images":[H3front1,H3front2,H3room1,H3room2,H3living,H3living2,H3garden]
    },

    //House 4
    {
        "id":"prop5",
        "type":"House",
        "bedrooms":3,
        "bathrooms":2,
        "price":500000,
        "tenure":"Freehold",
        "description":"Welcome to this meticulously maintained three-bedroom, two-bathroom house on Crofton Road, Orpington. Presented in excellent decorative order throughout, this residence is a harmonious blend of modern design and timeless elegance. Step into the heart of the home, where an inviting open-plan layout awaits. The modern fitted kitchen seamlessly integrates with the living room, featuring solid wooden floors and boasting integrated appliances, including a dishwasher and a washing machine. The large open plan extends graciously to a secluded private courtyard garden through bi-folding doors, creating a seamless indoor-outdoor living experience. All three bedrooms are generously sized, offering double-sized comfort. The family bathroom boasts a matching three-piece suite with a shower attachment over the bath, while a separate wet room adds an extra layer of convenience...",
        "location":"B6255, Ingleton, Carnforth",
        "picture":H4front1,
        "floorPlan":H4floorP,
        "map":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d827.384227358061!2d-2.4736147544941955!3d54.14937870180436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487c7c29aac6644d%3A0x3dbe2fa55720137!2sB6255%2C%20Ingleton%2C%20Carnforth%20LA6%203BZ%2C%20UK!5e1!3m2!1sen!2slk!4v1704885139030!5m2!1sen!2slk",
        "url":"properties/prop5.html",
        "added": {
            "month":"January",
            "day":4,
            "year":2023
        },
        "postalCode": "90",
        "images":[H4front1,H4living,H4room1,H4garden,H4bathroom,H4kitchen]

    },

    //Bunglow 1
    {
        "id":"prop6",
        "type":"bungalow",
        "bedrooms":8,
        "bathrooms":6,
        "price":5000000,
        "tenure":"Freehold",
        "description":"An exceptional property offering vast opportunities for multigenerational living or lucrative business ventures. This magnificent estate, immersed within a serene semi-rural setting, unveils its splendour in the form of a detached house and an additional detached bungalow, all nestled within an expansive plot of almost 5 acres...",
        "location":"Hadleigh Road, Holton St. Mary",
        "picture":B1front1,
        "floorPlan":B1floorP,
        "map":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12092.655549503204!2d1.0022119999999999!3d51.99010144999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d9084f30991107%3A0x260e1ca9dad024d2!2sHolton%20St%20Mary%2C%20Colchester%20CO7%206NS%2C%20UK!5e1!3m2!1sen!2slk!4v1704885187277!5m2!1sen!2slk",
        "url":"properties/prop6.html",
        "added": {
            "month":"May",
            "day":25,
            "year":2023
        },
        "postalCode": "60",
        "images":[B1front1,B1living,B1living2,B1kitchen,B1garden,B1garden2,B1relax,B1room]

    },

    //Bunglow 2
    {
        "id":"prop7",
        "type":"bungalow",
        "bedrooms":6,
        "bathrooms":5,
        "price":6000000,
        "tenure":"Freehold",
        "description":"Step into the epitome of luxurious living with this exceptional six-bedroom, five-bathroom bungalow on Crofton Road, Orpington. Immaculately presented and exuding a sense of opulence, this residence offers an unparalleled lifestyle that combines elegance with modern convenience. The heart of this bungalow features a state-of-the-art open-plan kitchen, seamlessly blending with the expansive living room adorned with solid wooden floors. The kitchen is equipped with integrated appliances, including a dishwasher and a washing machine, creating a space that is both functional and aesthetically pleasing. Enjoy the seamless transition from indoors to outdoors with bi-folding doors that lead to a secluded private courtyard garden, providing the perfect oasis for relaxation. All six bedrooms are generously sized, offering ample accommodation for family and guests. The family bathroom boasts a matching three-piece suite with a shower attachment over the bath, and a separate wet room adds an extra touch of luxury...",
        "location":"35 Crofton Ave, Orpington BR6",
        "picture":B2front2,
        "floorPlan":B2floorP,
        "map":"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d943.0545219750937!2d0.0731667!3d51.371694399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTHCsDIyJzE4LjEiTiAwwrAwNCcyMy40IkU!5e1!3m2!1sen!2slk!4v1704885224131!5m2!1sen!2slk",
        "url":"properties/prop7.html",
        "added": {
            "month":"December",
            "day":19,
            "year":2023
        },
        "postalCode": "45",
        "images":[B2front2,B2front1,B2living,B2kitchen,B2room,B2bathroom,B2garden]

    }

]}