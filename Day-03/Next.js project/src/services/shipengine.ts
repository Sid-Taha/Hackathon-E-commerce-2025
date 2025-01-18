"use server"


export async function shipEngine() {
  const response =  await fetch("https://api.shipengine.com/v1/labels", {
    method: "POST",
    headers:{
      "Content-Type" : "application/json",
      "API-Key" : "TEST_YsJqgQid14ndAJcwls2CcNmUAK9sag58ElySketTbRg"
    },
    body: JSON.stringify({
      "shipment": {
        "carrier_id": "se-1685739",
        "service_code": "ups_ground",
        "ship_to": {
          "name": "Ratan Lal",
          "phone": "03001234567",
          "address_line1": "street 123, block A, gulshan Iqbal, karachi",
          "city_locality": "karachi",
          "state_province": "CA",
          "postal_code": "95128",
          "country_code": "US",
          "address_residential_indicator": "yes"
        },
        "ship_from": {
          "name": "jetha Lal",
          "company_name": "abc company",
          "phone": "+1 555-555-5555",
          "address_line1": "gokuldam society",
          "city_locality": "gujjrat",
          "state_province": "TX",
          "postal_code": "78731",
          "country_code": "US",
          "address_residential_indicator": "no"
        },
        "packages": [
          {
            "weight": {
              "value": 20,
              "unit": "ounce"
            },
            "dimensions": {
              "height": 10,
              "width": 15,
              "length": 15,
              "unit": "inch"
            }
          }
        ]
      }
    })
  })

  const data = await response.json()

  console.log("😡",data);
  
}