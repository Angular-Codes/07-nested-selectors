export enum TYPE_VEHICLE {
    CAR = "CARRO",
    VAN = "CAMIONETA",
    MOTORCYCLE = "MOTO",
}

export const PRODUCTS_SERVICE_BY_VEHICLE = [
    {
      identifier: TYPE_VEHICLE.CAR,
      type: "Carros",
      icon: "car-sedan",
      fflag: "coti.home_type-vehicle-car",
      items: [
        {
          type: 'product',
          color: "#00C389",
          displayName: 'Llantas',
          redirect: '/buscar/llantas',
          imgSrc: 'assets/images/bitmap/Llantas-bitmap-m-car.png',
          imgSrcDesktop: 'assets/images/bitmap/Llantas-bitmap-m-car.png',
          fflag: 'coti.available-tire-car'
        },
        {
          type: 'product',
          color: "#FDDA24",
          displayName: 'Baterías',
          redirect: '/buscar/baterias',
          imgSrc: 'assets/images/bitmap/Baterias-bitmap-d-car.png',
          imgSrcDesktop: 'assets/images/bitmap/Baterias-bitmap-d-car.png',
          fflag: 'coti.available-battery-car'
        },
        {
          type: 'product',
          color: "#FDDA24",
          displayName: 'Seguros',
          external: true,
          redirect: 'https://sufi.red5g.co/',
          imgSrc: 'assets/images/bitmap/Seguros-car.png',
          imgSrcDesktop: 'assets/images/bitmap/Seguros-car.png',
          fflag: 'coti.available-insurance-car'
        },
        {
          type: 'service',
          color: "#FF7F41",
          displayName: 'Flypass',
          redirect: 'https://www.bancolombia.com/pagos/flypass',
          external: true,
          imgSrc: 'assets/images/bitmap/Flypass-bitmap-m-car.png',
          imgSrcDesktop: 'assets/images/bitmap/Flypass-bitmap-d-car.png',
          fflag: 'coti.available-flypass-car'
        },
        {
          type: 'service',
          color: "#9063CD",
          displayName: 'Lavadas',
          redirect: '/buscar/lavadas',
          imgSrc: 'assets/images/bitmap/Lavadas-bitmap-m-car.png',
          imgSrcDesktop: 'assets/images/bitmap/Lavadas-bitmap-d-car.png',
          fflag: 'coti.available-wash-car'
        },
      ]
    },
    {
        identifier: TYPE_VEHICLE.MOTORCYCLE,
        type: "Motos",
        icon: "motorcycle-cross",
        fflag: "coti.home_type-vehicle-motorcycle",
        items: [
          {
            type: 'product',
            color: "#00C389",
            displayName: 'Llantas',
            redirect: '/buscar/llantas',
            imgSrc: 'assets/images/bitmap/Llantas-bitmap-m-motorcycle.png',
            imgSrcDesktop: 'assets/images/bitmap/Llantas-bitmap-d-motorcycle.png',
            fflag: 'coti.available-tire-motorcycle'
          },
          {
            type: 'product',
            color: "#FDDA24",
            displayName: 'Baterías',
            redirect: '/buscar/baterias',
            imgSrc: 'assets/images/bitmap/Baterias-bitmap-m-motorcycle.png',
            imgSrcDesktop: 'assets/images/bitmap/Baterias-bitmap-d-motorcycle.png',
            fflag: 'coti.available-battery-motorcycle'
          },
          {
            type: 'service',
            color: "#9063CD",
            displayName: 'Lavadas',
            redirect: '/',
            imgSrc: 'assets/images/bitmap/Lavadas-bitmap-m-car.png',
            imgSrcDesktop: 'assets/images/bitmap/Lavadas-bitmap-d-car.png',
            fflag: 'coti.available-wash-motorcycle'
          },
        ]
      },
    {
      identifier: TYPE_VEHICLE.VAN,
      type: "Camionetas",
      icon: "van",
      fflag: "coti.home_type-vehicle-van",
      items: [
        {
          type: 'product',
          color: "#00C389",
          displayName: 'Llantas',
          redirect: '/buscar/llantas',
          imgSrc: 'assets/images/bitmap/Llantas-bitmap-m-car.png',
          imgSrcDesktop: 'assets/images/bitmap/Llantas-bitmap-m-car.png',
          fflag: 'coti.available-tire-car'
        },
        {
          type: 'product',
          color: "#FDDA24",
          displayName: 'Baterías',
          redirect: '/buscar/baterias',
          imgSrc: 'assets/images/bitmap/Baterias-bitmap-d-car.png',
          imgSrcDesktop: 'assets/images/bitmap/Baterias-bitmap-d-car.png',
          fflag: 'coti.available-battery-car'
        },
        {
          type: 'product',
          color: "#FDDA24",
          displayName: 'Seguros',
          external: true,
          redirect: 'https://sufi.red5g.co/',
          imgSrc: 'assets/images/bitmap/Seguros-car.png',
          imgSrcDesktop: 'assets/images/bitmap/Seguros-car.png',
          fflag: 'coti.available-insurance-car'
        },
        {
          type: 'service',
          color: "#FF7F41",
          displayName: 'Flypass',
          redirect: 'https://www.bancolombia.com/pagos/flypass',
          external: true,
          imgSrc: 'assets/images/bitmap/Flypass-bitmap-m-car.png',
          imgSrcDesktop: 'assets/images/bitmap/Flypass-bitmap-d-car.png',
          fflag: 'coti.available-flypass-car'
        },
        {
          type: 'service',
          color: "#9063CD",
          displayName: 'Lavadas',
          redirect: '/buscar/lavadas',
          imgSrc: 'assets/images/bitmap/Lavadas-bitmap-m-car.png',
          imgSrcDesktop: 'assets/images/bitmap/Lavadas-bitmap-d-car.png',
          fflag: 'coti.available-wash-van'
        },
      ]
    },
  ];