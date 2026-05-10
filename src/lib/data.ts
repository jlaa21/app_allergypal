
export const products = [
  {
    id: 1,
    name: "ABENOX & HYMNOX",
    manufacturer: "ROXALL",
    characteristics:
      "Extracto liofilizado de veneno de himenópteros con sus componentes alergénicamente activos y cuantificados en masa. El producto está liofilizado con manitol como sustancia inerte de carga. Su recomposición y dilución se lleva a cabo con solución salina fisiológica fenolada al 0,5% y HSA al 0,03%.",
    composition: {
      galenic: ["Fenol", "Seroalbúmina humana", "Manitol", "Cloruro sódico"],
      allergenic: {
        abenox: "Veneno de abeja (Apis mellifera)",
        hymnox: [
          "Polistes dominula",
          "Mezcla de Vespula germanica + Vespula vulgaris",
          "Vespa velutina",
        ],
      },
    },
    indications:
      "Reacciones sistémicas por hipersensibilidad IgE mediada a venenos de himenópteros (avispas y abejas).",
    adminRoute: "Subcutánea",
    distribution: ["España", "Italia", "Portugal"],
    storage: {
      conditions: "Conservar en nevera entre 2ºC y 8ºC.",
    },
    presentation: {
      inicio: {
        vialsDesc: "Viales A-B-B-B (veneno liofilizado)",
        diluentDesc:
          "Viales diluyente: 4 viales (1 disolvente de 5 ml y 3 disolventes de 1,4 ml)",
        table: [
          {
            label: "ETIQUETA AMARILLA",
            labelColor: "yellow",
            vial: "VIAL A",
            venom: "(125 mcg de veneno)",
            recomposition: "5 ml",
            concentration: "25 mcg/ml",
          },
          {
            label: "ETIQUETA NEGRA",
            labelColor: "black",
            vial: "VIAL B",
            venom: "(125 mcg de veneno)",
            recomposition: "1,25 ml",
            concentration: "100 mcg/ml",
          },
        ],
      },
      continuacion: {
        vialsDesc: "Viales B-B-B-B-B-B (veneno liofilizado)",
        diluentDesc: "Viales diluyente: 6 viales de 1.4 ml",
        table: [
          {
            label: "ETIQUETA NEGRA",
            labelColor: "black",
            vial: "VIAL B",
            venom: "(125 mcg de veneno)",
            recomposition: "1,25 ml",
            concentration: "100 mcg/ml",
          },
        ],
      },
    },
    dosage: {
      conventional: {
        initiation: [
          { vial: "VIAL A (Amarilla, 25 mcg/ml)", volume: "0,1", interval: "1ª DOSIS" },
          { vial: "VIAL A (Amarilla, 25 mcg/ml)", volume: "0,2", interval: "1 SEMANA (semana 1ª)" },
          { vial: "VIAL A (Amarilla, 25 mcg/ml)", volume: "0,4", interval: "1 SEMANA (semana 2ª)" },
          { vial: "VIAL A (Amarilla, 25 mcg/ml)", volume: "0,8", interval: "1 SEMANA (semana 3ª)" },
          { vial: "VIAL B (Negra, 100 mcg/ml)", volume: "0,4", interval: "1 SEMANA (semana 4ª)" },
          { vial: "VIAL B (Negra, 100 mcg/ml)", volume: "0,6", interval: "1 SEMANA (semana 5ª)" },
          { vial: "VIAL B (Negra, 100 mcg/ml)", volume: "0,8", interval: "1 SEMANA (semana 6ª)" },
          { vial: "VIAL B (Negra, 100 mcg/ml)", volume: "1", interval: "1 SEMANA (semana 7ª)" },
        ],
        maintenance: [
          { vial: "VIAL B (Negra, 100 mcg/ml)", volume: "1", interval: "1 mes (semana 11ª)" },
          { vial: "VIAL B (Negra, 100 mcg/ml)", volume: "1", interval: "1 mes" },
          { vial: "VIAL B (Negra, 100 mcg/ml)", volume: "1", interval: "1 mes" },
          { vial: "VIAL B (Negra, 100 mcg/ml)", volume: "1", interval: "1 mes" },
          { vial: "VIAL B (Negra, 100 mcg/ml)", volume: "1", interval: "1 mes" },
          { vial: "VIAL B (Negra, 100 mcg/ml)", volume: "1", interval: "1 mes" },
        ],
      },
      cluster: {
        initiation: [
            { vial: "VIAL A (Amarilla, 25 mcg/ml)", volume: "0,2 ml", interval: "DÍA 1: Administrar con intervalo de 30 min." },
            { vial: "VIAL A (Amarilla, 25 mcg/ml)", volume: "0,4 ml", interval: "DÍA 1: Administrar con intervalo de 30 min." },
            { vial: "VIAL A (Amarilla, 25 mcg/ml)", volume: "0,8 ml", interval: "1 SEMANA (semana 1ª): Administrar con intervalo de 30 min." },
            { vial: "VIAL B (Negra, 100 mcg/ml)", volume: "0,3 ml", interval: "1 SEMANA (semana 1ª): Administrar con intervalo de 30 min." },
            { vial: "VIAL B (Negra, 100 mcg/ml)", volume: "0,5 ml", interval: "1 SEMANA (semana 2ª): Administrar con intervalo de 30 min." },
            { vial: "VIAL B (Negra, 100 mcg/ml)", volume: "0,5 ml", interval: "1 SEMANA (semana 2ª): Administrar con intervalo de 30 min." },
            { vial: "VIAL B (Negra, 100 mcg/ml)", volume: "1 ml", interval: "2 SEMANAS (semana 4ª)" },
        ],
        maintenance: [
          { vial: "VIAL B (Negra, 100 mcg/ml)", volume: "1", interval: "1 mes" },
          { vial: "VIAL B (Negra, 100 mcg/ml)", volume: "1", interval: "1 mes" },
          { vial: "VIAL B (Negra, 100 mcg/ml)", volume: "1", interval: "1 mes" },
          { vial: "VIAL B (Negra, 100 mcg/ml)", volume: "1", interval: "1 mes" },
          { vial: "VIAL B (Negra, 100 mcg/ml)", volume: "1", interval: "1 mes" },
          { vial: "VIAL B (Negra, 100 mcg/ml)", volume: "1", interval: "1 mes" },
        ],
      },
      alternative: {
          initiation: [],
          maintenance: [],
      }
    },
    packageDuration: {
        initiation: "3 meses (pauta convencional) y 2 meses (pauta cluster)",
        continuation: "6 meses"
    },
  },
  {
    id: 2,
    name: "ACAROID",
    manufacturer: "ROXALL",
    characteristics: "Extracto nativo estandarizado en UT y adsorbido en hidróxido de aluminio. La estandarización se realiza en Unidades Terapéuticas (UT), unidad propia de ROXALL. 10.000 UT/ml equivalen a 30 microgramos/ml de Der p 1.",
    composition: {
      galenic: ["Hidróxido de Aluminio", "Cloruro Sódico", "Fenol"],
      allergenic: {
        acaroid: "Mezcla al 50% de Dermatophagoides pteronyssinus y Dermatophagoides farinae.",
      },
    },
    indications: "Tratamiento de la rinoconjuntivitis y/o asma alérgica estacional o perenne, causada por la sensibilización a ácaros del polvo doméstico.",
    adminRoute: "Subcutánea",
    distribution: ["Egipto", "China", "Grecia", "Gran Bretaña", "Italia", "Kuwait", "Luxemburgo", "Países Bajos", "Austria", "Polonia", "Portugal", "Rusia", "Arabia Saudita", "Suiza", "España", "Corea del Sur", "Turquía"],
    storage: {
      conditions: "Conservar en nevera entre 2ºC y 8ºC. No congelar.",
    },
    presentation: {
      inicio: {
        vialsDesc: "Tratamiento de inicio: 1 vial A y 2 viales B",
        diluentDesc: null,
        table: [
          {
            label: "ETIQUETA NARANJA",
            labelColor: "orange",
            vial: "VIAL A",
            venom: "",
            recomposition: "3 ml",
            concentration: "1.000 UT/ml",
          },
          {
            label: "ETIQUETA NARANJA",
            labelColor: "orange",
            vial: "VIAL B",
            venom: "",
            recomposition: "3 ml",
            concentration: "10.000 UT/ml",
          },
        ],
      },
      continuacion: {
        vialsDesc: "Tratamiento de mantenimiento: 2 viales B",
        diluentDesc: null,
        table: [
          {
            label: "ETIQUETA NARANJA",
            labelColor: "orange",
            vial: "VIAL B",
            venom: "",
            recomposition: "3 ml",
            concentration: "10.000 UT/ml",
          },
        ],
      },
    },
    dosage: {
      conventional: {
        initiation: [
          { vial: "VIAL A (Naranja, 1.000 UT/ml)", volume: "0,1", interval: "Semanal" },
          { vial: "VIAL A (Naranja, 1.000 UT/ml)", volume: "0,2", interval: "Semanal" },
          { vial: "VIAL A (Naranja, 1.000 UT/ml)", volume: "0,4", interval: "Semanal" },
          { vial: "VIAL A (Naranja, 1.000 UT/ml)", volume: "0,6", interval: "Semanal" },
          { vial: "VIAL B (Naranja, 10.000 UT/ml)", volume: "0,1", interval: "Semanal" },
          { vial: "VIAL B (Naranja, 10.000 UT/ml)", volume: "0,2", interval: "Semanal" },
          { vial: "VIAL B (Naranja, 10.000 UT/ml)", volume: "0,4", interval: "Semanal" },
          { vial: "VIAL B (Naranja, 10.000 UT/ml)", volume: "0,6", interval: "Semanal" },
        ],
        maintenance: [
          { vial: "VIAL B (Naranja, 10.000 UT/ml)", volume: "0,6", interval: "2 semanas" },
          { vial: "VIAL B (Naranja, 10.000 UT/ml)", volume: "0,6", interval: "Mensual" },
        ],
      },
      cluster: {
        initiation: [],
        maintenance: [],
      },
      alternative: {
        initiation: [],
        maintenance: [],
      }
    },
    packageDuration: {
        initiation: "Aproximadamente 4 meses",
        continuation: "Aproximadamente 9 meses por envase"
    },
  },
  {
    id: 3,
    name: "ACAROVAC PLUS",
    manufacturer: "LETI Pharma",
    characteristics: "Extracto alergénico de ácaros modificado químicamente con glutaraldehído (alergoide). Adsorbido en microesferas de L-tirosina para la inducción de una respuesta Th1.",
    composition: {
      galenic: ["Excipientes: L-tirosina, Fenol, Cloruro de sodio, Hidrogenofosfato de sodio dodecahidratado, Dihidrogenofosfato de potasio, Dihidrogenofosfato de sodio dihidratado y agua para preparaciones inyectables."],
      allergenic: {
        allergens: [
            "Dermatophagoides pteronyssinus",
            "Dermatophagoides farinae",
            "Lepidoglyphus destructor",
            "Blomia tropicalis",
        ],
      },
    },
    indications: "Tratamiento de la rinoconjuntivitis y/o asma alérgica estacional o perenne, causada por la sensibilización a ácaros del polvo doméstico.",
    adminRoute: "Subcutánea",
    distribution: ["España", "Portugal"],
    storage: {
      conditions: "Conservar en nevera entre 2ºC y 8ºC. No congelar.",
    },
    presentation: {
      inicio: {
        vialsDesc: "Tratamiento de inicio: Un envase con 2 viales de 1,5 ml cada uno. Etiqueta Violeta",
        diluentDesc: null,
        table: [
          {
            label: "ETIQUETA VIOLETA",
            labelColor: "purple",
            vial: "VIAL",
            venom: "",
            recomposition: "1,5 ml",
            concentration: "3000 SU/ml",
          }
        ],
      },
      continuacion: {
        vialsDesc: "Tratamiento de continuación: Un envase con 2 viales de 2,5 ml cada uno. Etiqueta Azul.",
        diluentDesc: null,
        table: [
            {
                label: "ETIQUETA AZUL",
                labelColor: "blue",
                vial: "VIAL",
                venom: "",
                recomposition: "2,5 ml",
                concentration: "3000 SU/ml",
            }
        ],
      },
    },
    dosage: {
        conventional: {
          initiation: [
            { vial: "VIAL (Violeta, 3000 SU/ml)", volume: "0,05", interval: "7-14 días" },
            { vial: "VIAL (Violeta, 3000 SU/ml)", volume: "0,1", interval: "7-14 días" },
            { vial: "VIAL (Violeta, 3000 SU/ml)", volume: "0,3", interval: "7-14 días" },
            { vial: "VIAL (Violeta, 3000 SU/ml)", volume: "0,5", interval: "7-14 días" },
          ],
          maintenance: [
            { vial: "VIAL (Violeta, 3000 SU/ml)", volume: "0,5", interval: "4-8 semanas" },
          ],
        },
        cluster: {
          initiation: [
            { vial: "VIAL (Violeta, 3000 SU/ml)", volume: "0.1", interval: "DÍA 1" },
            { vial: "VIAL (Violeta, 3000 SU/ml)", volume: "0.1", interval: "DÍA 1 (30 minutos después)" },
            { vial: "VIAL (Violeta, 3000 SU/ml)", volume: "0.2", interval: "DÍA 8" },
            { vial: "VIAL (Violeta, 3000 SU/ml)", volume: "0.3", interval: "DÍA 8 (30 minutos después)" },
            { vial: "VIAL (Violeta, 3000 SU/ml)", volume: "0.5", interval: "DÍA 29" },
          ],
          maintenance: [
            { vial: "VIAL (Violeta, 3000 SU/ml)", volume: "0.5", interval: "4-8 semanas" },
          ],
        },
        alternative: {
            initiation: [
                { vial: "VIAL (Violeta, 3000 SU/ml)", volume: "0,05", interval: "N.º de inyección: 1" },
                { vial: "VIAL (Violeta, 3000 SU/ml)", volume: "0,1", interval: "7-14 días" },
                { vial: "VIAL (Violeta, 3000 SU/ml)", volume: "0,2", interval: "7-14 días" },
                { vial: "VIAL (Violeta, 3000 SU/ml)", volume: "0,3", interval: "7-14 días" },
                { vial: "VIAL (Violeta, 3000 SU/ml)", volume: "0,4", interval: "7-14 días" },
                { vial: "VIAL (Violeta, 3000 SU/ml)", volume: "0,5", interval: "7-14 días" },
            ],
            maintenance: [
                { vial: "La primera inyección del tratamiento de mantenimiento debe administrarse 4-8 semanas después de la última inyección del tratamiento inicial. Después deben continuarse los intervalos de 4-8 semanas entre inyecciones.", volume: "1.500 SU - 0,5 ml", interval: "Dosis recomendada" },
            ],
        },
      },
    packageDuration: {
        initiation: "Envase 3 ml: 3-4 meses, Envase 5 ml: 5-6 meses.",
        continuation: "Envase 3 ml: 3-4 meses, Envase 5 ml: 5-6 meses."
    },
  },
  {
    id: 4,
    name: "ALLERGOVAC DEPOT",
    manufacturer: "LETI Pharma",
    characteristics: "Suspensión estéril de extractos alergénicos, que se presentan adsorbidos en hidróxido de aluminio en solución salina fenolada al 0,5%.",
    composition: {
      galenic: ["Hidróxido de Aluminio", "Cloruro Sódico", "Fenol"],
      allergenic: {
        allergovac: "Extractos alergénicos de pólenes, ácaros, hongos y epitelios de animales.",
      },
    },
    indications: "Tratamiento etiológico de la rinoconjuntivitis y/o asma alérgica, estacional o perenne, causada por la sensibilización IgE mediada frente a neumoalérgenos.",
    adminRoute: "Vía subcutánea.",
    distribution: ["España", "Portugal", "Italia"],
    storage: {
      conditions: "Conservar en nevera entre 2ºC y 8ºC. No congelar.",
    },
    presentation: {
      inicio: {
        vialsDesc: "Tratamiento de iniciación. Existe la posibilidad de solicitar Inicio con los siguientes viales: 1-2-3, 1-2-3-3, 2-3 y 2-3-3",
        diluentDesc: null,
        table: [
          {
            label: "VERDE",
            labelColor: "green",
            vial: "Vial nº 1",
            venom: "",
            recomposition: "3 ml",
            concentration: "10 TSU/ml",
          },
          {
            label: "AMARILLO",
            labelColor: "yellow",
            vial: "Vial nº 2",
            venom: "",
            recomposition: "3 ml",
            concentration: "100 TSU/ml",
          },
          {
            label: "ROJO",
            labelColor: "red",
            vial: "Vial nº 3",
            venom: "",
            recomposition: "5 ml",
            concentration: "1000 TSU/ml",
          },
        ],
      },
      continuacion: {
        vialsDesc: "Tratamiento de mantenimiento: 1 ó 2 viales nº 3. Etiqueta roja.",
        diluentDesc: null,
        table: [
            {
                label: "ROJO",
                labelColor: "red",
                vial: "Vial nº 3",
                venom: "",
                recomposition: "5 ml",
                concentration: "1000 TSU/ml",
              },
        ],
      },
    },
    dosage: {
      conventional: {
        initiation: [
          { vial: "VIAL 1 (Verde, 10 TSU/ml)", volume: "0.2", interval: "1 semana" },
          { vial: "VIAL 1 (Verde, 10 TSU/ml)", volume: "0.5", interval: "1 semana" },
          { vial: "VIAL 2 (Amarilla, 100 TSU/ml)", volume: "0.2", interval: "1 semana" },
          { vial: "VIAL 2 (Amarilla, 100 TSU/ml)", volume: "0.5", interval: "1 semana" },
          { vial: "VIAL 3 (Roja, 1000 TSU/ml)", volume: "0.2", interval: "1 semana" },
          { vial: "VIAL 3 (Roja, 1000 TSU/ml)", volume: "0.5", interval: "1 semana" },
          { vial: "VIAL 3 (Roja, 1000 TSU/ml)", volume: "1", interval: "1 semana" },
        ],
        maintenance: [
          { vial: "VIAL 3 (Roja, 1000 TSU/ml)", volume: "1", interval: "1 mes" },
        ],
      },
      cluster: {
        initiation: [
          { vial: "VIAL 2 (Amarilla, 100 TSU/ml)", volume: "0.2", interval: "1 semana" },
          { vial: "VIAL 2 (Amarilla, 100 TSU/ml)", volume: "0.5", interval: "1 semana" },
          { vial: "VIAL 3 (Roja, 1000 TSU/ml)", volume: "0.2", interval: "1 semana" },
          { vial: "VIAL 3 (Roja, 1000 TSU/ml)", volume: "0.5", interval: "1 semana" },
          { vial: "VIAL 3 (Roja, 1000 TSU/ml)", volume: "1", interval: "1 semana" },
        ],
        maintenance: [
            { vial: "VIAL 3 (Roja, 1000 TSU/ml)", volume: "1", interval: "1 mes" },
        ],
      },
      alternative: {
        initiation: [],
        maintenance: [],
      },
    },
    packageDuration: {
        initiation: "Viales 1-2-3: 120 días Viales 1-2-3-3: 330 días Viales 2-3: 120 días Viales 2-3-3: 270 días",
        continuation: "Viales 3:  5 meses (150 días) Viales 3-3: 10 meses (300 días)"
    },
  },
  {
    id: 5,
    name: "ALLERGOVAC POLIPLUS",
    manufacturer: "LETI Pharma",
    characteristics: "Suspensión estéril de extractos alergénicos polimerizados con glutaraldehido (alergoide), adsorbidos en hidróxido de aluminio, envasados en viales multidosis. El hidróxido de aluminio se utiliza como adsorbente para inducir una respuesta inmunológica Th1 y asegurar una liberación lenta del alérgeno. La composición es personalizable, con la posibilidad de elegir 2-3 alérgenos por vial.",
    composition: {
      galenic: ["Cloruro sódico", "Fenol", "Hidróxido de Aluminio", "Agua para preparaciones inyectables"],
      allergenic: {
        nota: "El médico prescriptor puede decidir si incluye 2 o 3 fuentes alergénicas seleccionándolas de los alérgenos del listado.",
        allergovac: [
          "puede contner :",
          "Blomia tropicalis",
          "D. pteronissinus",
          "D. farinae",
          "D. pteronissinus + D. farinae",
          "Lepidoglyphus destructor",
          "Artemisia vulgaris",
          "Betula verrucosa",
          "Cupressus arizonica",
          "Gramíneas salvajes (Dactylis, Lolium y Phleum)",
          "Olea europaea",
          "Parietaria judaica",
          "Phleum pratense",
          "Platanus acerifolia ",
          "Salsola kali",
          "Gato",
          "Perro"
        ],
      },
    },
    indications: "Tratamiento etiológico de la rinoconjuntivitis y/o asma alérgica, estacional o perenne, causada por la sensibilización IgE mediada frente a neumoalérgenos.",
    adminRoute: "Vía subcutánea.",
    distribution: ["España", "Portugal", "Italia"],
    storage: {
      conditions: "Conservar en nevera entre 2ºC y 8ºC. No congelar.",
    },
    presentation: {
      inicio: {
        vialsDesc: "Tratamiento de inicio: 2 viales.",
        diluentDesc: null,
        table: [
          {
            label: "ETIQUETA ROJA",
            labelColor: "red",
            vial: "Vial único",
            venom: "",
            recomposition: "2,5 ml",
            concentration: "20.000 UT/ml",
          },
        ],
      },
      continuacion: {
        vialsDesc: "Tratamiento de continuación: 2 viales.",
        diluentDesc: null,
        table: [
            {
                label: "ETIQUETA ROJA",
                labelColor: "red",
                vial: "Vial único",
                venom: "",
                recomposition: "2,5 ml",
                concentration: "20.000 UT/ml",
            },
        ],
      },
    },
    dosage: {
      conventional: {
        initiation: [
          { vial: "VIAL (Roja, 20000 UT/ml)", volume: "0.2 + 0.3 ml", interval: "Pauta de iniciación de 1 día. *Intervalo entre dosis: 30 minutos." },
        ],
        maintenance: [
          { vial: "VIAL (Roja, 20000 UT/ml)", volume: "0.5", interval: "30 días" },
        ],
      },
      cluster: {
        initiation: [
          { vial: "VIAL (Roja, 20000 UT/ml)", volume: "0.1", interval: "1er. día" },
          { vial: "VIAL (Roja, 20000 UT/ml)", volume: "0.3", interval: "1 semana" },
          { vial: "VIAL (Roja, 20000 UT/ml)", volume: "0.5", interval: "1 semana" },
        ],
        maintenance: [
          { vial: "VIAL (Roja, 20000 UT/ml)", volume: "0.5", interval: "1 mes" },
        ],
      },
      alternative: {
        initiation: [],
        maintenance: [
          { vial: "VIAL (Roja, 20000 UT/ml)", volume: "0.5", interval: "30 días" },
        ],
      },
    },
    packageDuration: {
        initiation: "Pauta 1 día (2 viales nº 3): 10 meses. Pauta rápida (2 viales nº 3): 8 meses y 2 semanas.",
        continuation: "Un vial: 5 meses Dos viales: 10 meses"
    },
  },
  {
    id: 6,
    name: "ALLERGOVIT",
    manufacturer: "ALLERGOPHARMA",
    characteristics: "Allergovit es un extracto modificado con formaldehído (alergoide) y estandarizado con las dosis de alérgenos mayores.",
    composition: {
      galenic: ["Se prepara en soluciones terapéuticas individuales de acuerdo con la composición indicada en la prescripción médica."],
      allergenic: {
        standardization: "El sistema de estandarización de Allergopharma representa una combinación de métodos de análisis físicos, químicos e inmunológicos, en combinación con pruebas biológicas.\n- Perfil proteico en SDS-PAGE\n- Perfil alergénico en inmunotransferencia\n- Actividad alergénica (RAST): RAST de inhibición\n- Contenido del alérgeno mayoritario: Los alérgenos mayoritarios se definen en función de la frecuencia con la que se detecta la IgE específica en las poblaciones de pacientes alérgicos (es decir, ≥ 50%). Se analiza el contenido de los alérgenos mayoritarios en los extractos y, si los resultados confirman que estos valores se encuentran dentro de los límites estipulados, entonces se ha logrado la uniformidad entre lotes. En las mediciones se aplican anticuerpos monoclonales específicos para los alérgenos que se están analizando. En este caso, un anticuerpo monoclonal se utiliza como anticuerpo de captura y un segundo anticuerpo, como detector.\n- Perfil proteico en SE-HPLC (cromatografía líquida de alto rendimiento).\n- Perfil proteico en IEF (isoelectroenfoque).\nLa actividad alergénica de los extractos, en Unidades Terapéuticas se determina mediante ensayos RAST de inhibición en comparación a referencias internas calibradas mediante pruebas cutáneas en pacientes alérgicos.",
        allergens: [
            { group: "PÓLENES GRAMÍNEAS", name: "Mezcla gramíneas", units: "10.000 UT/ml", major: "Grupo 5", concentration: "41,6" },
            { group: "PÓLENES GRAMÍNEAS", name: "Secale cereale", units: "10.000 UT/ml", major: "-", concentration: "-" },
            { group: "PÓLENES MALEZAS", name: "Ambrosia artemisifolia", units: "10.000 UT/ml", major: "-", concentration: "-" },
            { group: "PÓLENES MALEZAS", name: "Artemisia vulgaris", units: "10.000 UT/ml", major: "-", concentration: "-" },
            { group: "PÓLENES MALEZAS", name: "Parietaria judaica", units: "10.000 UT/ml", major: "-", concentration: "-" },
            { group: "PÓLENES MALEZAS", name: "Plantago lanceolata", units: "10.000 UT/ml", major: "-", concentration: "-" },
            { group: "PÓLENES ÁRBOLES", name: "Alnus glutinosa", units: "10.000 UT/ml", major: "-", concentration: "-" },
            { group: "PÓLENES ÁRBOLES", name: "Betula alba", units: "10.000 UT/ml", major: "Bet v 1", concentration: "38,3" },
            { group: "PÓLENES ÁRBOLES", name: "Corylus avellana", units: "10.000 UT/ml", major: "-", concentration: "-" },
            { group: "PÓLENES ÁRBOLES", name: "Fagus sylvatica", units: "10.000 UT/ml", major: "-", concentration: "-" },
            { group: "PÓLENES ÁRBOLES", name: "Olea europaea", units: "10.000 UT/ml", major: "Ole e 1", concentration: "18,3" },
        ],
      },
    },
    indications: "Rinitis, conjuntivitis o asma por hipersensibilidad IgE mediada a pólenes.",
    adminRoute: "Inyectable por vía subcutánea",
    distribution: ["Egipto", "China", "Grecia", "Gran Bretaña", "Italia", "Kuwait", "Luxemburgo", "Países Bajos", "Austria", "Polonia", "Portugal", "Rusia", "Arabia Saudita", "Suiza", "España", "Corea del Sur", "Turquía"],
    storage: {
      conditions: "Conservar en nevera entre 2ºC y 8ºC.",
    },
    presentation: {
      inicio: {
        vialsDesc: "Tratamiento de inicio",
        diluentDesc: null,
        table: [
          {
            label: "ETIQUETA VIAL A",
            labelColor: "white",
            vial: "A (1000 UT/ml)",
            venom: "",
            recomposition: "3 ml",
            concentration: "1000 UT/ml",
          },
          {
            label: "ETIQUETA VIAL B",
            labelColor: "blue",
            vial: "B (10.000 UT/ml)",
            venom: "",
            recomposition: "3 ml",
            concentration: "10.000 UT/ml",
          },
        ],
      },
      continuacion: {
        vialsDesc: "Tratamiento de mantenimiento",
        diluentDesc: null,
        table: [
            {
                label: "ETIQUETA VIAL B",
                labelColor: "blue",
                vial: "B (10.000 UT/ml)",
                venom: "",
                recomposition: "3 ml",
                concentration: "10.000 UT/ml",
            },
            {
                label: "ETIQUETA VIAL B",
                labelColor: "blue",
                vial: "B (10.000 UT/ml)",
                venom: "",
                recomposition: "3 ml",
                concentration: "10.000 UT/ml",
            },
        ],
      },
    },
    dosage: {
        conventional: {
          initiation: [
            { vial: "VIAL A (Blanca, 1.000 UT/ml)", volume: "0,1", interval: "Semanal" },
            { vial: "VIAL A (Blanca, 1.000 UT/ml)", volume: "0,2", interval: "Semanal" },
            { vial: "VIAL A (Blanca, 1.000 UT/ml)", volume: "0,4", interval: "Semanal" },
            { vial: "VIAL A (Blanca, 1.000 UT/ml)", volume: "0,8", interval: "Semanal" },
            { vial: "VIAL B (Azul, 10.000 UT/ml)", volume: "0,15", interval: "Semanal" },
            { vial: "VIAL B (Azul, 10.000 UT/ml)", volume: "0,3", interval: "Semanal" },
            { vial: "VIAL B (Azul, 10.000 UT/ml)", volume: "0,6", interval: "Semanal" },
          ],
          maintenance: [
            { vial: "VIAL B (Azul, 10.000 UT/ml)", volume: "0,6", interval: "2 semanas" },
            { vial: "VIAL B (Azul, 10.000 UT/ml)", volume: "0,6", interval: "Mensual" },
          ],
        },
        cluster: {
          initiation: [],
          maintenance: [],
        },
        alternative: {
          initiation: [],
          maintenance: [],
        },
      },
    packageDuration: {
        initiation: "4 meses",
        continuation: ""
    },
  },
  {
    id: 7,
    name: "Alt a 1 mol",
    manufacturer: "DIATER",
    characteristics: "Extracto alergénico liofilizado en monodosis del alérgeno mayoritario de Alternaria alternata, Alt a 1, a una concentración de 0,46 mcg/mL. Se presenta con diluyente de recomposición para obtener una suspensión de Alt a 1 adsorbido en hidróxido de aluminio para administración subcutánea.",
    composition: {
      galenic: ["Sustancia activa: Extracto alergénico liofilizado de Alt a 1, alérgeno mayoritario del hongo Alternaria alternata.", "Excipientes: Hidróxido de aluminio, cloruro sódico y agua para inyección."],
      allergenic: {
        mainInfo: "Alt a 1 MOL contiene un extracto alergénico de Alt a 1, alérgeno mayor de Alternaria alternata, a una concentración de 0,46 mcg/mL de Alt a 1 (vial máxima concentración).",
        standardization: "Extracto estandarizado biológicamente cuya potencia alergénica es expresada en contenido de alérgeno mayor Alt a 1 expresado en mcg/ml. Alt a 1 MOL contiene exclusivamente 0,46 mcg/ml de Alt a 1."
      },
    },
    indications: "Rinitis, conjuntivitis o asma por hipersensibilidad IgE mediada a Alternaria alternata.",
    adminRoute: "Subcutánea",
    distribution: ["España", "Portugal"],
    storage: {
      conditions: "Vial extracto liofilizado: No conservar a temperatura superior a 25º C. Vial extracto reconstituido: Administrar en el día. No conservar",
    },
    presentation: {
      inicio: {
        vialsDesc: "Tratamiento de Iniciación: Viales A-A-B-B-B-B (se suministran en viales monodosis en forma liofilizada para ser reconstituidos con 1 mL de diluyente).",
        diluentDesc: null,
        table: [
          {
            label: "AMARILLA",
            labelColor: "yellow",
            vial: "VIAL A",
            venom: "",
            recomposition: "1 mL",
            concentration: "0,046 mcg/mL",
          },
          {
            label: "ROJA",
            labelColor: "red",
            vial: "VIAL B",
            venom: "",
            recomposition: "1 mL",
            concentration: "0,46 mcg/mL",
          },
        ],
      },
      continuacion: {
        vialsDesc: "Tratamiento de mantenimiento: Consta de 3 o 6 viales número B a la concentración óptima terapéutica de 0,46 mcg/ml.",
        diluentDesc: null,
        table: [
          {
            label: "ROJA",
            labelColor: "red",
            vial: "VIAL B",
            venom: "",
            recomposition: "1 mL",
            concentration: "0,46 mcg/mL",
          },
        ],
      },
    },
    dosage: {
      conventional: {
        initiation: [],
        maintenance: [],
      },
      cluster: {
        initiation: [
          { vial: "VIAL A (Amarilla, 0,046 mcg/ml)", volume: "0,1+0,2* mL", interval: "DÍA 1: Administrar con intervalo de 30 min." },
          { vial: "VIAL A (Amarilla, 0,046 mcg/ml)", volume: "0,4+0,4* mL", interval: "DÍA 8 (semanal)" },
          { vial: "VIAL B (Roja, 0,46 mcg/ml)", volume: "0,1+0,2* mL", interval: "DÍA 15 (semanal)" },
          { vial: "VIAL B (Roja, 0,46 mcg/ml)", volume: "0,4+0,4* mL", interval: "DÍA 22 (semanal)" },
          { vial: "VIAL B (Roja, 0,46 mcg/ml)", volume: "0,8 mL", interval: "DÍA 52 (mensual)" },
          { vial: "VIAL B (Roja, 0,46 mcg/ml)", volume: "0.8 mL", interval: "DÍA 82 (mensual)" },
        ],
        maintenance: [
          { vial: "VIAL B (Roja, 0,46 mcg/mL)", volume: "0,8 mL", interval: "mensual" },
          { vial: "VIAL B (Roja, 0,46 mcg/mL)", volume: "0,8 mL", interval: "mensual" },
          { vial: "VIAL B (Roja, 0,46 mcg/mL)", volume: "0,8 mL", interval: "mensual" },
          { vial: "VIAL B (Roja, 0,46 mcg/mL)", volume: "0,8 mL", interval: "mensual" },
          { vial: "VIAL B (Roja, 0,46 mcg/mL)", volume: "0,8 mL", interval: "mensual" },
          { vial: "VIAL B (Roja, 0,46 mcg/mL)", volume: "0,8 mL", interval: "mensual" },
        ],
      },
      alternative: {
        initiation: [
          { vial: "VIAL B (Roja, 0,46 mcg/mL)", volume: "0,1+0,2* mL", interval: "DÍA 1 (semanal)" },
          { vial: "VIAL B (Roja, 0,46 mcg/mL)", volume: "0,4+0,4* mL", interval: "DÍA 8 (semanal)" },
          { vial: "VIAL B (Roja, 0,46 mcg/mL)", volume: "0,8 mL", interval: "DÍA 38 (mensual)" },
          { vial: "VIAL B (Roja, 0,46 mcg/mL)", volume: "0.8 mL", interval: "DÍA 68 (mensual)" },
        ],
        maintenance: [],
      }
    },
    packageDuration: {
        initiation: "Viales A-A-B-B-B-B: 90 días Viales B-B-B-B-B-B: 180 días",
        continuation: "Mantenimiento viales B-B-B: 90 días                Mantenimiento viales B-B-B-B-B-B: 180 días"
    },
  },
  {
    id: 8,
    name: "Alt a 1 mol mix",
    manufacturer: "DIATER",
    characteristics: "Extracto alergénico liofilizado en monodosis del alérgeno mayoritario de Alternaria alternata, Alt a 1, en combinación con un extracto alergénico polimerizado a la concentración máxima terapéutica sin efecto de la dilución, sindo posibles las siguientes mezclas: Alt a 1 + Dermatophagoides pteronyssinus Alt a 1 + Gramíneas salvajes Alt a 1 + Olea europaea Alt a 1 + Gramíneas salvajes + Olea europaea La mezcla de gramíneas salvajes incluye: Dactylis glomerata, Lolium perenne, Phleum pratense y Poa pratensis Se presenta con diluyente de recomposición para obtener una suspensión de Alt a 1 adsorbido en hidróxido de aluminio para administración subcutánea.",
    composition: {
        galenic: ["Sustancia activa: Cada vial de Alt a 1 MOL MIX, contiene 0,518 mcg de la proteína purificada de Alt a 1 y el correspondiente extracto polimerizado a la concentración máxima terapéutica, sin efecto de la dilución: Gramíneas salvajes: 0,3 HEPD/ml Olea europaea: 0,77 HEPD/ml Dermatophagoides pteronyssinus: 0,3 HEPD/ml"],
        allergenic: {
            mainInfo: "Alt a 1 ( 0,37 mcg/dosis), siendo posibles las siguientes mezclas: Alt a 1 + Gramíneas salvajes (0,3  HEPD/ml)  Alt a 1 + Olea europaea ( 0,77 HEPD/ml) Alt a 1 + Dermatophagoides pteronyssinus ( 0,3 HEPD/ml) Alt a 1 + Gramíneas salvajes (0,3  HEPD/ml) + Olea europaea ( 0,77 HEPD/ml)",
            standardization: "Extracto estandarizado biológicamente cuya potencia alergénica es expresada en contenido de alérgeno mayor Alt a 1 en mcg/ml y en valor HEPD como medida de potencia alergénica del extracto polimerizado de Dermatophagoides, gramíneas salvajes u Olea. Estos extractos polimerizados están estandarizados biológicamente de acuerdo a las \"Nordic Guidelines\" mediante pruebas \"in vivo\": pruebas cutáneas skin prick test, realizadas en alrededor de 30 pacientes alérgicos con una clínica clara de rinitis o asma alérgica y que presentan empeoramiento de los síntomas durante la exposición al alérgeno, seleccionados de acuerdo a la normativa de la EAACI. A dichos pacientes se les hace skin prick-test a 4 diluciones por duplicado del extracto a estandarizar, junto con un control positivo y un control negativo; de esta forma se determina el valor HEPD, que se define como la concentración del extracto que produce en el paciente medio un área de la pápula igual a la histamina a 10 mg/ml."
        },
    },
    indications: "Rinitis, conjuntivitis o asma por hipersensibilidad IgE mediada a Alternaria alternata y Dermatophagoides pteronyssinus o gramíneas salvajes (Dactylis glomerata, Lolium perenne, Phleum pratense y Poa pratensis) u Olea europaea.",
    adminRoute: "Subcutánea",
    distribution: ["España", "Portugal"],
    storage: {
        conditions: "Conservar en nevera entre 2ºC y 8ºC.",
    },
    presentation: {
        inicio: {
            vialsDesc: "Alt a 1 MOL MIX se comercializa en viales monodosis en forma liofilizada (viales B con etiqueta roja) para ser reconstituidos con 0,7 mL de diluyente. Se proporcionan el mismo número de viales de disolvente que de producto liofilizado. Tanto para el tratamiento de iniciación como para el mantenimiento se pueden solicitar 3 o 6 viales B de sustancia activa a la concentración máxima terapéutica y el mismo número de viales de disolvente de reconstitución.",
            diluentDesc: null,
            table: [
              {
                label: "ROJA",
                labelColor: "red",
                vial: "VIAL B (Roja)",
                venom: "",
                recomposition: "0,7 mL",
                concentration: "N/A",
              }
            ],
        },
        continuacion: {
            vialsDesc: "",
            diluentDesc: null,
            table: [],
        },
    },
    dosage: {
        conventional: {
            initiation: [
                { vial: "VIAL B (Roja)", volume: "0,1+0,1* mL", interval: "Día 1 (30 min, semanal)" },
                { vial: "VIAL B (Roja)", volume: "0,2+0,3* mL", interval: "Día 8 (30 min, semanal)" },
                { vial: "VIAL B (Roja)", volume: "0,5 mL", interval: "Día 38 (mensual)" },
            ],
            maintenance: [
                { vial: "VIAL B (Roja)", volume: "0,5 mL", interval: "mensual" },
                { vial: "VIAL B (Roja)", volume: "0,5 mL", interval: "mensual" },
                { vial: "VIAL B (Roja)", volume: "0,5 mL", interval: "mensual" },
                { vial: "VIAL B (Roja)", volume: "0,5 mL", interval: "mensual" },
                { vial: "VIAL B (Roja)", volume: "0,5 mL", interval: "mensual" },
                { vial: "VIAL B (Roja)", volume: "0,5 mL", interval: "mensual" },
            ],
        },
        cluster: {
            initiation: [],
            maintenance: [],
        },
        alternative: {
            initiation: [],
            maintenance: [],
        },
    },
    packageDuration: {
        initiation: "Inicio viales B-B-B: 45 días, Inicio viales B-B-B-B-B-B: 135 días",
        continuation: "Mantenimiento viales B-B-B: 90 días, Mantenimiento viales B-B-B-B-B-B: 180 días",
    },
  },
  {
    id: 9,
    name: "ALUSTAL RAPID",
    manufacturer: "STALLERGENES IBERICA",
    characteristics: "Suspensión inyectable de extractos alergénicos adsorbidos sobre gel preformado de hidróxido de aluminio. Se prepara en soluciones terapéuticas individuales de acuerdo con la composición determinada en la prescripción médica.",
    composition: {
      galenic: ["hidróxido de aluminio", "fenol", "cloruro de sodio", "agua para inyección"],
      allergenic: {
        allergens: [
          { group: "ÁCAROS", name: "D. pteronyssinus + D. farinae (50/50)", concentration: "10 IR/ml" },
          { group: "PÓLENES GRAMÍNEAS", name: "5 Gramíneas (Anthoxanthum, Dactylis, Lolium, Phleum, Poa)", concentration: "10 IR/ml" },
          { group: "PÓLENES ÁRBOLES", name: "Juniperus ashei", concentration: "10 IR/ml" },
          { group: "PÓLENES ÁRBOLES", name: "Olea europaea", concentration: "10 IR/ml" },
          { group: "PÓLENES MALEZAS", name: "Parietaria", concentration: "10 IR/ml" },
          { group: "EPITELIOS", name: "Gato", concentration: "10 IR/ml" }
        ],
        standardization: "Extractos estandarizados biológicamente en unidades IR/ml. (IR: Indice de Reactividad) Se asigna un valor de 100 IR/ml a un extracto alergénico cuando al realizar un prick-test empleando una lanceta Stallerpoint en 30 pacientes sensibilizados al alérgeno en cuestión produce una pápula de un diámetro medio de 7 mm (media geométrica)."
      },
    },
    indications: "Rinitis, conjuntivitis o asma por hipersensibilidad IgE mediada a alérgenos inhalados.",
    adminRoute: "Inyectable por vía subcutánea",
    distribution: ["España", "Italia"],
    storage: {
      conditions: "Conservar en nevera entre 2ºC y 8ºC.",
    },
    presentation: {
      inicio: {
        vialsDesc: "Tratamiento de inicio: Envase con 1 vial verde 1 IR/ml y 1 vial azul 10 IR/ml",
        diluentDesc: null,
        table: [
          {
            label: "VERDE",
            labelColor: "green",
            vial: "Vial",
            venom: "",
            recomposition: "5 ml",
            concentration: "1 IR/ml",
          },
          {
            label: "AZUL",
            labelColor: "blue",
            vial: "Vial",
            venom: "",
            recomposition: "5 ml",
            concentration: "10 IR/ml",
          },
        ],
      },
      continuacion: {
        vialsDesc: "Tratamiento de mantenimiento: Envase con 1 o 2 viales azules 10 IR/ml",
        diluentDesc: null,
        table: [
          {
            label: "AZUL",
            labelColor: "blue",
            vial: "Vial",
            venom: "",
            recomposition: "5 ml",
            concentration: "10 IR/ml",
          },
        ],
      },
    },
    dosage: {
      conventional: {
        initiation: [
          { vial: "VIAL (Verde, 1 IR/ml)", volume: "0,1 ml", interval: "Día 0" },
          { vial: "VIAL (Verde, 1 IR/ml)", volume: "0,2 ml", interval: "Día 7" },
          { vial: "VIAL (Verde, 1 IR/ml)", volume: "0,4 ml", interval: "Día 14" },
          { vial: "VIAL (Verde, 1 IR/ml)", volume: "0,8 ml", interval: "Día 21" },
          { vial: "VIAL (Azul, 10 IR/ml)", volume: "0,1 ml", interval: "Día 28" },
          { vial: "VIAL (Azul, 10 IR/ml)", volume: "0,2 ml", interval: "Día 35" },
          { vial: "VIAL (Azul, 10 IR/ml)", volume: "0,4 ml", interval: "Día 42" },
          { vial: "VIAL (Azul, 10 IR/ml)", volume: "0,8 ml", interval: "Día 49" },
        ],
        maintenance: [
          { vial: "VIAL (Azul, 10 IR/ml)", volume: "0,8 ml", interval: "Mensual" },
        ],
      },
      cluster: {
        initiation: [],
        maintenance: [],
      },
      alternative: {
        initiation: [],
        maintenance: [],
      },
    },
    packageDuration: {
        initiation: "7 meses",
        continuation: "6 meses (1 vial) o 12 meses (2 viales)"
    },
  },
  {
    id: 10,
    name: "Alutard SQ",
    manufacturer: "ALK-ABELLO",
    characteristics: "Alutard SQ es una preparación de liberación lenta (depot) que contiene uno o varios extractos alergénicos estandarizados, adsorbidos en hidróxido de aluminio.",
    composition: {
      galenic: ["Principio activo: Extractos alergénicos estandarizados adsorbidos en hidróxido de aluminio.", "Excipientes: Hidróxido de aluminio, cloruro de sodio, hidrogenocarbonato de sodio, fenol, agua para la preparación de inyectables, hidróxido de sodio (para ajuste de pH)"],
      allergenic: {
        allergens: [
          { group: "ACAROS", name: "Dermatophagoides mezcla (D. pteronyssinus + D. farinae)", units: "Der 1: 9.8 mcg/ml", concentration: "" },
          { group: "PÓLENES GRAMÍNEAS", name: "Phleum pratense", units: "Phl p 5: 20 mcg/ml", concentration: "" },
          { group: "EPITELIOS", name: "Gato", units: "Fel d 1: 15 mcg/ml", concentration: "" },
          { group: "EPITELIOS", name: "Perro", units: "Can f: 1 3.21 mcg/ml Can f 5: 0.72 mcg/ml", concentration: "" },
        ],
        standardization: "La actividad biológica de ALUTARD SQ® corresponde a la actividad biológica del alérgeno y se expresa en unidades SQ-U/mL. La estandarización SQ garantiza la presencia de todos los alérgenos relevantes y ofrece una excepcional uniformidad de un lote a otro, lo que garantiza una eficacia óptima y una alta seguridad. La estandarización SQ se realiza en tres pasos:",
      },
    },
    indications: "Rinoconjuntivitis y/o asma bronquial por hipersensibilidad IgE mediada",
    adminRoute: "Subcutánea",
    distribution: ["Austria", "Czech Republic", "Denmark", "Finland", "Iceland", "Netherlands", "Poland", "Spain", "Sweden", "Switzerland", "Turkey (Pre-Approval)"],
    storage: {
      conditions: "Conservar en nevera entre 2ºC y 8ºC.",
    },
    presentation: {
      inicio: {
        vialsDesc: "Tratamiento de inicio: Envase con 4 viales.",
        diluentDesc: null,
        table: [
          { label: "GRIS", labelColor: "gray", vial: "Vial 1", venom: "", recomposition: "5 ml", concentration: "100 SQ-U/mL" },
          { label: "VERDE", labelColor: "green", vial: "Vial 2", venom: "", recomposition: "5 ml", concentration: "1000 SQ-U/mL" },
          { label: "AMARILLA", labelColor: "yellow", vial: "Vial 3", venom: "", recomposition: "5 ml", concentration: "10 000 SQ-U/mL" },
          { label: "ROJA", labelColor: "red", vial: "Vial 4", venom: "", recomposition: "5 ml", concentration: "100 000 SQ-U/mL" },
        ],
      },
      continuacion: {
        vialsDesc: "Tratamiento de mantenimiento: Envase con 1 vial.",
        diluentDesc: null,
        table: [
          { label: "ROJA", labelColor: "red", vial: "Vial 4", venom: "", recomposition: "5 ml", concentration: "100 000 SQ-U/mL" },
        ],
      },
    },
    dosage: {
      conventional: {
        initiation: [
          { vial: "VIAL 1 (Gris, 100 SQ-U/ml)", volume: "0,1", interval: "Semana 1, Inyección 1" },
          { vial: "VIAL 2 (Verde, 1.000 SQ-U/ml)", volume: "0,1", interval: "Semana 1, Inyección 2" },
          { vial: "VIAL 3 (Amarilla, 10.000 SQ-U/ml)", volume: "0,1", interval: "Semana 1, Inyección 3" },
          { vial: "VIAL 3 (Amarilla, 10.000 SQ-U/ml)", volume: "0,2", interval: "Semana 2, Inyección 4" },
          { vial: "VIAL 3 (Amarilla, 10.000 SQ-U/ml)", volume: "0,2", interval: "Semana 2, Inyección 5" },
          { vial: "VIAL 3 (Amarilla, 10.000 SQ-U/ml)", volume: "0,5", interval: "Semana 3, Inyección 6" },
          { vial: "VIAL 3 (Amarilla, 10.000 SQ-U/ml)", volume: "0,5", interval: "Semana 3, Inyección 7" },
          { vial: "VIAL 4 (Roja, 100.000 SQ-U/ml)", volume: "0,2", interval: "Semana 4, Inyección 8" },
          { vial: "VIAL 4 (Roja, 100.000 SQ-U/ml)", volume: "0,4", interval: "Semana 5, Inyección 9" },
          { vial: "VIAL 4 (Roja, 100.000 SQ-U/ml)", volume: "0,6", interval: "Semana 6, Inyección 10" },
          { vial: "VIAL 4 (Roja, 100.000 SQ-U/ml)", volume: "1", interval: "Semana 7, Inyección 11" },
        ],
        maintenance: [],
      },
      cluster: {
        initiation: [
          { vial: "VIAL 1 (Gris, 100 SQ-U/ml)", volume: "0,2", interval: "Semana 1, Inyección 1" },
          { vial: "VIAL 1 (Gris, 100 SQ-U/ml)", volume: "0,4", interval: "Semana 2, Inyección 2" },
          { vial: "VIAL 1 (Gris, 100 SQ-U/ml)", volume: "0,8", interval: "Semana 3, Inyección 3" },
          { vial: "VIAL 2 (Verde, 1.000 SQ-U/ml)", volume: "0,2", interval: "Semana 4, Inyección 4" },
          { vial: "VIAL 2 (Verde, 1.000 SQ-U/ml)", volume: "0,4", interval: "Semana 5, Inyección 5" },
          { vial: "VIAL 2 (Verde, 1.000 SQ-U/ml)", volume: "0,8", interval: "Semana 6, Inyección 6" },
          { vial: "VIAL 3 (Amarilla, 10.000 SQ-U/ml)", volume: "0,2", interval: "Semana 7, Inyección 7" },
          { vial: "VIAL 3 (Amarilla, 10.000 SQ-U/ml)", volume: "0,4", interval: "Semana 8, Inyección 8" },
          { vial: "VIAL 3 (Amarilla, 10.000 SQ-U/ml)", volume: "0,8", interval: "Semana 9, Inyección 9" },
          { vial: "VIAL 4 (Roja, 100.000 SQ-U/ml)", volume: "0,1", interval: "Semana 10, Inyección 10" },
          { vial: "VIAL 4 (Roja, 100.000 SQ-U/ml)", volume: "0,2", interval: "Semana 11, Inyección 11" },
          { vial: "VIAL 4 (Roja, 100.000 SQ-U/ml)", volume: "0,4", interval: "Semana 12, Inyección 12" },
          { vial: "VIAL 4 (Roja, 100.000 SQ-U/ml)", volume: "0,6", interval: "Semana 13, Inyección 13" },
          { vial: "VIAL 4 (Roja, 100.000 SQ-U/ml)", volume: "0,8", interval: "Semana 14, Inyección 14" },
          { vial: "VIAL 4 (Roja, 100.000 SQ-U/ml)", volume: "1", interval: "Semana 15, Inyección 15" },
        ],
        maintenance: [],
      },
      alternative: {
        initiation: [
          { vial: "VIAL 1 (Gris, 100 SQ-U/ml)", volume: "0,2", interval: "Semana 1, Inyección 1" },
          { vial: "VIAL 1 (Gris, 100 SQ-U/ml)", volume: "0,4", interval: "Semana 2, Inyección 2" },
          { vial: "VIAL 1 (Gris, 100 SQ-U/ml)", volume: "0,8", interval: "Semana 3, Inyección 3" },
          { vial: "VIAL 2 (Verde, 1.000 SQ-U/ml)", volume: "0,2", interval: "Semana 4, Inyección 4" },
          { vial: "VIAL 2 (Verde, 1.000 SQ-U/ml)", volume: "0,4", interval: "Semana 5, Inyección 5" },
          { vial: "VIAL 2 (Verde, 1.000 SQ-U/ml)", volume: "0,8", interval: "Semana 6, Inyección 6" },
          { vial: "VIAL 3 (Amarilla, 10.000 SQ-U/ml)", volume: "0,1", interval: "Semana 7, Inyección 7" },
          { vial: "VIAL 3 (Amarilla, 10.000 SQ-U/ml)", volume: "0,2", interval: "Semana 8, Inyección 8" },
          { vial: "VIAL 3 (Amarilla, 10.000 SQ-U/ml)", volume: "0,3", interval: "Semana 9, Inyección 9" },
          { vial: "VIAL 3 (Amarilla, 10.000 SQ-U/ml)", volume: "0,4", interval: "Semana 10, Inyección 10" },
          { vial: "VIAL 3 (Amarilla, 10.000 SQ-U/ml)", volume: "0,5", interval: "Semana 11, Inyección 11" },
          { vial: "VIAL 3 (Amarilla, 10.000 SQ-U/ml)", volume: "0,6", interval: "Semana 12, Inyección 12" },
          { vial: "VIAL 3 (Amarilla, 10.000 SQ-U/ml)", volume: "0,7", interval: "Semana 13, Inyección 13" },
          { vial: "VIAL 3 (Amarilla, 10.000 SQ-U/ml)", volume: "0,8", interval: "Semana 14, Inyección 14" },
          { vial: "VIAL 3 (Amarilla, 10.000 SQ-U/ml)", volume: "0,9", interval: "Semana 15, Inyección 15" },
          { vial: "VIAL 4 (Roja, 100.000 SQ-U/ml)", volume: "0,1", interval: "Semana 16, Inyección 16" },
          { vial: "VIAL 4 (Roja, 100.000 SQ-U/ml)", volume: "0,2", interval: "Semana 17, Inyección 17" },
          { vial: "VIAL 4 (Roja, 100.000 SQ-U/ml)", volume: "0,3", interval: "Semana 18, Inyección 18" },
          { vial: "VIAL 4 (Roja, 100.000 SQ-U/ml)", volume: "0,4", interval: "Semana 19, Inyección 19" },
          { vial: "VIAL 4 (Roja, 100.000 SQ-U/ml)", volume: "0,5", interval: "Semana 20, Inyección 20" },
          { vial: "VIAL 4 (Roja, 100.000 SQ-U/ml)", volume: "0,6", interval: "Semana 21, Inyección 21" },
          { vial: "VIAL 4 (Roja, 100.000 SQ-U/ml)", volume: "0,7", interval: "Semana 22, Inyección 22" },
          { vial: "VIAL 4 (Roja, 100.000 SQ-U/ml)", volume: "0,8", interval: "Semana 23, Inyección 23" },
          { vial: "VIAL 4 (Roja, 100.000 SQ-U/ml)", volume: "0,9", interval: "Semana 24, Inyección 24" },
          { vial: "VIAL 4 (Roja, 100.000 SQ-U/ml)", volume: "1", interval: "Semana 25, Inyección 25" },
        ],
        maintenance: [
            { vial: "Una vez alcanzada la dosis de mantenimiento, el intervalo de inyecciones irá aumentando de manera gradual hasta 6 semanas", volume: "", interval: "" }
        ],
      },
    },
    packageDuration: {
      initiation: "*Pauta I: 4 meses + 1 semana *Pauta II: 4 meses + 3 semanas *Pauta III: 4 meses + 3 semanas",
      continuation: "Cada 6 semanas: 210 días",
    },
  },
  {
    id: 11,
    name: "ALUTARD SQ HIMENOPTEROS",
    manufacturer: "ALK-ABELLO",
    characteristics: "Preparación de liberación lenta (depot) que contiene un extracto alergénico estandarizado de veneno de himenópteros (Apis mellifera o Vespula spp) para administración subcutánea. Conservar en nevera (entre 2 y 8ºC). No congelar. Conservar en el embalaje original para protegerlo de la luz. Producto registrado en la AEMPS. Acceso a la ficha técnica de Apis mellifera: FT_68398.pdf (aemps.es) Acceso a la ficha técnica de Vespula: FT_82858.pdf (aemps.es)",
    composition: {
      galenic: ["A/ Sustancias activas: Según fórmula solicitada por el especialista", "B/ Excipientes: Hidróxido de aluminio, Cloruro sódico, Hidrogenocarbonato de sodio, Fenol, Agua para inyección, Hidróxido de sodio (para ajuste de pH)"],
      allergenic: {
        allergens: ["Apis mellifera", "Vespula spp"],
        standardization: "La actividad biológica de ALUTARD SQ® corresponde a la actividad biológica del alérgeno y se expresa en unidades SQ-U/mL. 100.000 SQ-U/mL = 100 mcg de veneno. La estandarización SQ garantiza la presencia de todos los alérgenos relevantes y ofrece una excepcional uniformidad de un lote a otro, lo que garantiza una eficacia óptima y una alta seguridad. La estandarización SQ se realiza en tres pasos: Paso 1: Identificación de la composición de los alérgenos (combinación de IEC, RIEC, SDS-PAGE e inmunotransferencia). Paso 2: Determinación del contenido principal en alérgenos (IDR, ELISA) Paso 3: Medición de la actividad biológica total (TACA)"
      },
    },
    indications: "Tratamiento de la hipersensibilidad IgE-mediada al veneno de himenópteros en pacientes que han sufrido una reacción anafiláctica tras la picadura de estos insectos (Apis mellifera o Vespula spp)",
    adminRoute: "Subcutánea",
    distribution: ["República Checa", "Dinamarca", "Finlandia", "Alemania", "Holanda", "Polonia", "Eslovaquia", "Suecia", "Suiza", "Turquía", "España"],
    storage: {
      conditions: "Conservar en nevera (entre 2 y 8ºC). No congelar. Conservar en el embalaje original para protegerlo de la luz.",
    },
    presentation: {
      inicio: {
        vialsDesc: "Tratamiento de Iniciación: Vial ALUTARD SQ Volumen Concentración 1 100 SQ-U/mL 5 ml Etiqueta gris 2 1.000 SQ-U/mL 5 ml Etiqueta verde 3 10.000 SQ-U/mL 5 ml Etiqueta amarilla 4 100.000 SQ-U/mL 5 ml Etiqueta roja",
        diluentDesc: null,
        table: [
          { label: "GRIS", labelColor: "gray", vial: "Vial 1", venom: "", recomposition: "5 ml", concentration: "100 SQ-U/mL" },
          { label: "VERDE", labelColor: "green", vial: "Vial 2", venom: "", recomposition: "5 ml", concentration: "1.000 SQ-U/mL" },
          { label: "AMARILLA", labelColor: "yellow", vial: "Vial 3", venom: "", recomposition: "5 ml", concentration: "10.000 SQ-U/mL" },
          { label: "ROJA", labelColor: "red", vial: "Vial 4", venom: "", recomposition: "5 ml", concentration: "100.000 SQ-U/mL" },
        ],
      },
      continuacion: {
        vialsDesc: "Tratamiento de Mantenimiento: Vial ALUTARD SQ Volumen Concentración 4 100.000 SQ-U/mL 5 ml Etiqueta roja",
        diluentDesc: null,
        table: [
          { label: "ROJA", labelColor: "red", vial: "Vial 4", venom: "", recomposition: "5 ml", concentration: "100.000 SQ-U/mL" },
        ],
      },
    },
    dosage: {
      conventional: {
        initiation: [
          { vial: "VIAL 1 (Gris, 100 SQ-U/ml)", volume: "0,1", interval: "Semana 1, Inyección 1" },
          { vial: "VIAL 2 (Verde, 1.000 SQ-U/ml)", volume: "0,1", interval: "Semana 1, Inyección 2" },
          { vial: "VIAL 3 (Amarilla, 10.000 SQ-U/ml)", volume: "0,1", interval: "Semana 1, Inyección 3" },
          { vial: "VIAL 3 (Amarilla, 10.000 SQ-U/ml)", volume: "0,2", interval: "Semana 2, Inyección 4" },
          { vial: "VIAL 3 (Amarilla, 10.000 SQ-U/ml)", volume: "0,2", interval: "Semana 2, Inyección 5" },
          { vial: "VIAL 3 (Amarilla, 10.000 SQ-U/ml)", volume: "0,5", interval: "Semana 3, Inyección 6" },
          { vial: "VIAL 3 (Amarilla, 10.000 SQ-U/ml)", volume: "0,5", interval: "Semana 3, Inyección 7" },
          { vial: "VIAL 4 (Roja, 100.000 SQ-U/ml)", volume: "0,2", interval: "Semana 4, Inyección 8" },
          { vial: "VIAL 4 (Roja, 100.000 SQ-U/ml)", volume: "0,4", interval: "Semana 5, Inyección 9" },
          { vial: "VIAL 4 (Roja, 100.000 SQ-U/ml)", volume: "0,6", interval: "Semana 6, Inyección 10" },
          { vial: "VIAL 4 (Roja, 100.000 SQ-U/ml)", volume: "1", interval: "Semana 7, Inyección 11" },
        ],
        maintenance: [],
      },
      cluster: {
        initiation: [],
        maintenance: [],
      },
      alternative: {
        initiation: [],
        maintenance: [],
      },
    },
    packageDuration: {
      initiation: "Set de Iniciación (Vial 1,2,3,4): Según pauta",
      continuation: "Set de Mantenimiento (1 vial 4): Según pauta. Administración cada 6 semanas: 7 meses. Administración cada 8 semanas: 10 meses. La administración cada 8 semanas es posible sin que caduque Alutard venenos, siempre que se administre en uso hospitalario para diferentes pacientes",
    },
  },
  {
    id: 12,
    name: "ALUTEK",
    manufacturer: "INMUNOTEK",
    characteristics: "Extractos alergénicos nativos adsorbidos en gel de hidróxido de aluminio. Conservar en frigorífico entre 2-8ºC. No congelar.",
    composition: {
      galenic: ["Extracto alergénico nativo según formulación individualizada."],
      allergenic: {
        allergens: [
          { group: "ÁCAROS", name: "Dermatophagoides pteronyssinus", units: "10.000 UT/ml", concentration: "" },
          { group: "ÁCAROS", name: "Dermatophagoides farinae", units: "10.000 UT/ml", concentration: "" },
          { group: "ÁCAROS", name: "Lepidoglyphus destructor", units: "10.000 UT/ml", concentration: "" },
          { group: "ÁCAROS", name: "Tyrophagus putrescentiae", units: "10.000 UT/ml", concentration: "" },
          { group: "ÁCAROS", name: "Acarus siro", units: "10.000 UT/ml", concentration: "" },
          { group: "ÁCAROS", name: "Euroglyphus maynei", units: "10.000 UT/ml", concentration: "" },
          { group: "ÁCAROS", name: "Blomia tropicalis", units: "10.000 UT/ml", concentration: "" },
          { group: "PÓLENES DE GRAMÍNEAS", name: "Agrostis alba", units: "10.000 UT/ml", concentration: "" },
          { group: "PÓLENES DE GRAMÍNEAS", name: "Cynodon dactylon", units: "10.000 UT/ml", concentration: "" },
          { group: "PÓLENES DE GRAMÍNEAS", name: "Dactylis glomerata", units: "10.000 UT/ml", concentration: "" },
          { group: "PÓLENES DE GRAMÍNEAS", name: "Festuca elatior", units: "10.000 UT/ml", concentration: "" },
          { group: "PÓLENES DE GRAMÍNEAS", name: "Holcus lanatus", units: "10.000 UT/ml", concentration: "" },
          { group: "PÓLENES DE GRAMÍNEAS", name: "Lolium perenne", units: "10.000 UT/ml", concentration: "" },
          { group: "PÓLENES DE GRAMÍNEAS", name: "Phleum pratense", units: "10.000 UT/ml", concentration: "" },
          { group: "PÓLENES DE GRAMÍNEAS", name: "Phragmites communis", units: "10.000 UT/ml", concentration: "" },
          { group: "PÓLENES DE GRAMÍNEAS", name: "Poa pratensis", units: "10.000 UT/ml", concentration: "" },
          { group: "PÓLENES DE GRAMÍNEAS", name: "Secale cereale", units: "10.000 UT/ml", concentration: "" },
          { group: "PÓLENES DE GRAMÍNEAS", name: "Trisetum paniceum", units: "10.000 UT/ml", concentration: "" },
          { group: "PÓLENES DE MALEZAS", name: "Artemisia vulgaris", units: "10.000 UT/ml", concentration: "" },
          { group: "PÓLENES DE MALEZAS", name: "Chenopodium album", units: "10.000 UT/ml", concentration: "" },
          { group: "PÓLENES DE MALEZAS", name: "Parietaria judaica", units: "10.000 UT/ml", concentration: "" },
          { group: "PÓLENES DE MALEZAS", name: "Plantago lanceolata", units: "10.000 UT/ml", concentration: "" },
          { group: "PÓLENES DE MALEZAS", name: "Salsola kali", units: "10.000 UT/ml", concentration: "" },
          { group: "PÓLENES DE ÁRBOLES", name: "Alnus glutinosa", units: "10.000 UT/ml", concentration: "" },
          { group: "PÓLENES DE ÁRBOLES", name: "Betula verrucosa", units: "10.000 UT/ml", concentration: "" },
          { group: "PÓLENES DE ÁRBOLES", name: "Corylus avellana", units: "10.000 UT/ml", concentration: "" },
          { group: "PÓLENES DE ÁRBOLES", name: "Cupressus arizonica", units: "10.000 UT/ml", concentration: "" },
          { group: "PÓLENES DE ÁRBOLES", name: "Cupressus sempervirens", units: "10.000 UT/ml", concentration: "" },
          { group: "PÓLENES DE ÁRBOLES", name: "Olea europea", units: "10.000 UT/ml", concentration: "" },
          { group: "PÓLENES DE ÁRBOLES", name: "Platanus hispanica", units: "10.000 UT/ml", concentration: "" },
          { group: "EPITELIOS", name: "Epitelio de gato", units: "10.000 UT/ml", concentration: "" },
          { group: "EPITELIOS", name: "Epitelio de perro", units: "10.000 UT/ml", concentration: "" },
          { group: "HONGOS", name: "Alternaria", units: "10.000 UT/ml", concentration: "" },
        ],
        standardization: 'Inmunotek estandariza los extractos alergénicos siguiendo la Normativa de los Países Nórdicos (Nordic-Council-on-Medicines. Registration of allergen preparations. Nordic guidelines. Prepared by the Nordic Council on Medicines in cooperation with the Drug Regulatory Authorities in Denmark, Finland, Iceland, Norway and Sweden.Uppsala (Sweden): Nordiska Läkemedelsnämnden. 1989). En esta normativa se define que "la actividad de un extracto alergénico tiene 10.000 Unidades Biológicas (UB) cuando produce una reacción cutánea del mismo tamaño que la que produce una solución positiva de referencia, constituida por histamina 54,3 mmol/l (dihidroclorhidrato de histamina a 10 mg/ml), cuando ambas soluciones se administran usando la misma técnica (prick test) en un mínimo de 20 individuos clínicamente alérgicos frente al extracto alergénico correspondiente". Los extractos nativos de Inmunotek están valorados biológicamente en Unidades Terapéuticas (UT). 10.000 UT de extracto nativo equivalen a 10.000 UB.'
      },
    },
    indications: "Rinitis, conjuntivitis o asma por hipersensibilidad IgE mediada a alérgenos inhalados.",
    adminRoute: "Subcutánea",
    distribution: ["España", "Alemania", "Italia", "Portugal"],
    storage: {
      conditions: "Conservar en frigorífico entre 2-8ºC. No congelar.",
    },
    presentation: {
      inicio: {
        vialsDesc: "Vial 0: opcional",
        diluentDesc: "Mantenimiento: 1-2 viales B",
        table: [
          { label: "VERDE", labelColor: "green", vial: "Vial 0", venom: "", recomposition: "2.5 ml", concentration: "100 UT/ml" },
          { label: "GRIS", labelColor: "gray", vial: "Vial A", venom: "", recomposition: "2.5 ml", concentration: "1.000 UT/ml" },
          { label: "AMARILLA", labelColor: "yellow", vial: "Vial B", venom: "", recomposition: "2.5 ml", concentration: "10.000 UT/ml" },
        ],
      },
      continuacion: {
        vialsDesc: "Mantenimiento: 1-2 viales B",
        diluentDesc: null,
        table: [
          { label: "AMARILLA", labelColor: "yellow", vial: "Vial B", venom: "", recomposition: "2.5 ml", concentration: "10.000 UT/ml" },
        ],
      },
    },
    dosage: {
      conventional: {
        initiation: [
          { vial: "VIAL 0 (Verde)", volume: "0.1", interval: "Día 0" },
          { vial: "VIAL 0 (Verde)", volume: "0.3", interval: "Día 7" },
          { vial: "VIAL 0 (Verde)", volume: "0.5", interval: "Día 14" },
          { vial: "VIAL A (Gris/Plata)", volume: "0.1", interval: "Día 21" },
          { vial: "VIAL A (Gris/Plata)", volume: "0.3", interval: "Día 28" },
          { vial: "VIAL A (Gris/Plata)", volume: "0.5", interval: "Día 35" },
          { vial: "VIAL B (Amarilla/Dorada)", volume: "0.1", interval: "Día 42" },
          { vial: "VIAL B (Amarilla/Dorada)", volume: "0.3", interval: "Día 49" },
          { vial: "VIAL B (Amarilla/Dorada)", volume: "0.5", interval: "Día 56" },
        ],
        maintenance: [
          { vial: "VIAL B (Amarilla/Dorada)", volume: "0.5", interval: "Cada 30 días" },
        ],
      },
      cluster: {
        initiation: [
          { vial: "VIAL A (Gris/Plata)", volume: "0.2-0.3 ml*", interval: "Día 0" },
          { vial: "VIAL B (Amarilla/Dorada)", volume: "0.1-0.2 ml*", interval: "Día 7" },
          { vial: "VIAL B (Amarilla/Dorada)", volume: "0.2-0.3 ml*", interval: "Día 14" },
        ],
        maintenance: [
          { vial: "VIAL B (Amarilla/Dorada)", volume: "0.5", interval: "Cada 30 días" },
        ],
      },
      alternative: {
        initiation: [
          { vial: "VIAL A (Gris/Plata)", volume: "0.1", interval: "Día 0" },
          { vial: "VIAL A (Gris/Plata)", volume: "0.3", interval: "Día 7" },
          { vial: "VIAL A (Gris/Plata)", volume: "0.5", interval: "Día 14" },
          { vial: "VIAL B (Amarilla/Dorada)", volume: "0.1", interval: "Día 21" },
          { vial: "VIAL B (Amarilla/Dorada)", volume: "0.3", interval: "Día 28" },
          { vial: "VIAL B (Amarilla/Dorada)", volume: "0.5", interval: "Día 35" },
        ],
        maintenance: [
          { vial: "VIAL B (Amarilla/Dorada)", volume: "0.5", interval: "Cada 30 días" },
        ],
      },
    },
    packageDuration: {
      initiation: "5 meses",
      continuation: "1 vial B (5 meses), 2 viales B (10 meses)",
    },
  },
  {
    id: 13,
    name: "ALXOID",
    manufacturer: "INMUNOTEK",
    characteristics: "Extractos alergénicos polimerizados con glutaraldehído y adsorbidos en gel de hidróxido de aluminio. La polimerización reduce su capacidad de unión a la IgE específica, manteniendo su capacidad inmunogénica, lo que permite alcanzar la dosis de mantenimiento de forma rápida y segura. Conservar en frigorífico entre 2 y 8ºC. No congelar.",
    composition: {
      galenic: ["Extracto alergénico polimerizado según formulación individualizada.", "Excipientes: hidróxido de aluminio, cloruro sódico, fenol y agua de calidad inyectable."],
      allergenic: {
        allergens: [
          { group: "ÁCAROS", name: "Dermatophagoides pteronyssinus", units: "10.000 UT/ml" },
          { group: "ÁCAROS", name: "Dermatophagoides farinae", units: "10.000 UT/ml" },
          { group: "ÁCAROS", name: "Mezcla Dermatophagoides (D. Pteronissinus y D. Farinae)", units: "10.000 UT/ml" },
          { group: "ÁCAROS", name: "Lepidoglyphus destructor", units: "10.000 UT/ml" },
          { group: "ÁCAROS", name: "Tyrophagus putrescentiae", units: "10.000 UT/ml" },
          { group: "ÁCAROS", name: "Acarus siro", units: "10.000 UT/ml" },
          { group: "ÁCAROS", name: "Euroglyphus maynei", units: "10.000 UT/ml" },
          { group: "ÁCAROS", name: "Blomia tropicalis", units: "10.000 UT/ml" },
          { group: "PÓLENES DE GRAMÍNEAS", name: "Mezcla de 2 gramíneas: Dactylis glomerata, Trisetum paniceum", units: "10.000 UT/ml" },
          { group: "PÓLENES DE GRAMÍNEAS", name: "Agrostis alba", units: "10.000 UT/ml" },
          { group: "PÓLENES DE GRAMÍNEAS", name: "Cynodon dactylon", units: "10.000 UT/ml" },
          { group: "PÓLENES DE GRAMÍNEAS", name: "Dactylis glomerata", units: "10.000 UT/ml" },
          { group: "PÓLENES DE GRAMÍNEAS", name: "Festuca elatior", units: "10.000 UT/ml" },
          { group: "PÓLENES DE GRAMÍNEAS", name: "Holcus lanatus", units: "10.000 UT/ml" },
          { group: "PÓLENES DE GRAMÍNEAS", name: "Lolium perenne", units: "10.000 UT/ml" },
          { group: "PÓLENES DE GRAMÍNEAS", name: "Phleum pratense", units: "10.000 UT/ml" },
          { group: "PÓLENES DE GRAMÍNEAS", name: "Phragmites communis", units: "10.000 UT/ml" },
          { group: "PÓLENES DE GRAMÍNEAS", name: "Poa pratensis", units: "10.000 UT/ml" },
          { group: "PÓLENES DE GRAMÍNEAS", name: "Secale cereale", units: "10.000 UT/ml" },
          { group: "PÓLENES DE GRAMÍNEAS", name: "Trisetum paniceum", units: "10.000 UT/ml" },
          { group: "PÓLENES DE MALEZAS", name: "Artemisia vulgaris", units: "10.000 UT/ml" },
          { group: "PÓLENES DE MALEZAS", name: "Chenopodium album", units: "10.000 UT/ml" },
          { group: "PÓLENES DE MALEZAS", name: "Parietaria judaica", units: "10.000 UT/ml" },
          { group: "PÓLENES DE MALEZAS", name: "Plantago lanceolata", units: "10.000 UT/ml" },
          { group: "PÓLENES DE MALEZAS", name: "Salsola kali", units: "10.000 UT/ml" },
          { group: "PÓLENES DE ÁRBOLES", name: "Alnus glutinosa", units: "10.000 UT/ml" },
          { group: "PÓLENES DE ÁRBOLES", name: "Betula verrucosa", units: "10.000 UT/ml" },
          { group: "PÓLENES DE ÁRBOLES", name: "Corylus avellana", units: "10.000 UT/ml" },
          { group: "PÓLENES DE ÁRBOLES", name: "Cupressus arizonica", units: "10.000 UT/ml" },
          { group: "PÓLENES DE ÁRBOLES", name: "Cupressus sempervirens", units: "10.000 UT/ml" },
          { group: "PÓLENES DE ÁRBOLES", name: "Olea europea", units: "10.000 UT/ml" },
          { group: "PÓLENES DE ÁRBOLES", name: "Platanus hispanica", units: "10.000 UT/ml" },
          { group: "EPITELIOS", name: "Epitelio de gato", units: "10.000 UT/ml" },
          { group: "EPITELIOS", name: "Epitelio de perro", units: "10.000 UT/ml" },
        ],
        standardization: 'Inmunotek estandariza los extractos alergénicos siguiendo la Normativa de los Países Nórdicos (Nordic-Council-on-Medicines. Registration of allergen preparations. Nordic guidelines. Prepared by the Nordic Council on Medicines in cooperation with the Drug Regulatory Authorities in Denmark, Finland, Iceland, Norway and Sweden.Uppsala (Sweden): Nordiska Läkemedelsnämnden. 1989). En esta normativa se define que "la actividad de un extracto alergénico tiene 10.000 Unidades Biológicas (UB) cuando produce una reacción cutánea del mismo tamaño que la que produce una solución positiva de referencia, constituida por histamina 54,3 mmol/l (dihidroclorhidrato de histamina a 10 mg/ml), cuando ambas soluciones se administran usando la misma técnica (prick test) en un mínimo de 20 individuos clínicamente alérgicos frente al extracto alergénico correspondiente". Los extractos modificados de Inmunotek están valorados biológicamente en Unidades Terapéuticas (UT). 10000 UT contienen la misma cantidad de proteína que 10.000 UB del extracto no modificado.'
      },
    },
    indications: "Rinitis, conjuntivitis o asma por hipersensibilidad IgE mediada a alérgenos inhalados.",
    adminRoute: "Subcutánea",
    distribution: ["España", "Alemania", "Italia", "Portugal", "Austria"],
    storage: {
      conditions: "Conservar en frigorífico entre 2 y 8ºC. No congelar.",
    },
    presentation: {
      inicio: {
        vialsDesc: "- Alxoid iniciación: Incluye un vial A y 1 o 2 viales B (según solicitud)",
        diluentDesc: null,
        table: [
          { label: "GRIS/PLATA", labelColor: "gray", vial: "Vial A", venom: "", recomposition: "2.5 ml", concentration: "2.000 UT/ml" },
          { label: "AZUL", labelColor: "blue", vial: "Vial B", venom: "", recomposition: "2.5 ml", concentration: "10.000 UT/ml" },
        ],
      },
      continuacion: {
        vialsDesc: "- Alxoid mantenimiento: Incluye 1 o 2 viales B (según solicitud)",
        diluentDesc: null,
        table: [
          { label: "AZUL", labelColor: "blue", vial: "Vial B", venom: "", recomposition: "2.5 ml", concentration: "10.000 UT/ml" },
        ],
      },
    },
    dosage: {
      conventional: {
        initiation: [
          { vial: "VIAL A (Gris/Plata)", volume: "0.2", interval: "Día 0" },
          { vial: "VIAL A (Gris/Plata)", volume: "0.5", interval: "Día 7" },
          { vial: "VIAL B (Azul)", volume: "0.2", interval: "Día 14" },
          { vial: "VIAL B (Azul)", volume: "0.5", interval: "Día 21" },
        ],
        maintenance: [
          { vial: "VIAL B (Azul)", volume: "0.5", interval: "Cada 30 días" },
        ],
      },
      cluster: {
        initiation: [],
        maintenance: [],
      },
      alternative: {
        initiation: [],
        maintenance: [],
      },
    },
    packageDuration: {
      initiation: "Alxoid iniciación (viales A, B):  4 meses  Alxoid iniciación (viales A, B, B):  9 meses ",
      continuation: "Alxoid mantenimiento (vial B):  5 meses    Alxoid mantenimiento (viales B, B):  10 meses ",
    },
  },
  {
    id: 14,
    name: "APHITER DEPOT",
    manufacturer: "ASAC PHARMACEUTICAL INMUOLOGY",
    characteristics: "Tratamiento de inmunoterapia individualizado, constituido por extractos alergénicos a los que está sensibilizado el paciente para administración subcutánea. Se prepara de forma individualizada para cada paciente de acuerdo a la composición determinada en la prescripción médica. Conservar en nevera (entre 2ºC y 8ºC). No congelar.",
    composition: {
      galenic: ["Sustancia activa: Extractos alergénicos a los que está sensibilizado el paciente preparados de forma individualizada en base a la solicitud del especialista.", "Excipientes: Hidróxido de aluminio, fenol, cloruro sódico y agua para inyección. "],
      allergenic: {
        allergens: [
          { group: "ÁCAROS", name: "Blomia tropicalis", concentration: "0,2" },
          { group: "ÁCAROS", name: "D. pteronyssinus", concentration: "0,3" },
          { group: "ÁCAROS", name: "D. farinae", concentration: "0,3" },
          { group: "ÁCAROS", name: "Lepidoglyphus destructor", concentration: "0,6" },
          { group: "ÁCAROS", name: "Tyrophagus putrescentiae", concentration: "0,05" },
          { group: "PÓLENES GRAMÍNEAS", name: "Gramíneas salvajes* (Lolium, Poa, Phleum y Dactylis)", concentration: "0,3" },
          { group: "PÓLENES GRAMÍNEAS", name: "Cynodon dactylon", concentration: "0,35" },
          { group: "PÓLENES GRAMÍNEAS", name: "Dactylis glomerata", concentration: "0,3" },
          { group: "PÓLENES GRAMÍNEAS", name: "Lolium perenne", concentration: "0,3" },
          { group: "PÓLENES GRAMÍNEAS", name: "Phleum pratense", concentration: "0,3" },
          { group: "PÓLENES GRAMÍNEAS", name: "Phragmites communis", concentration: "0,35" },
          { group: "PÓLENES GRAMÍNEAS", name: "Poa pratensis", concentration: "0,3" },
          { group: "PÓLENES MALEZAS", name: "Artemisia vulgaris", concentration: "0,6" },
          { group: "PÓLENES MALEZAS", name: "Chenopodium album", concentration: "0,15" },
          { group: "PÓLENES MALEZAS", name: "Parietaria judaica", concentration: "0,2" },
          { group: "PÓLENES MALEZAS", name: "Plantago lanceolata", concentration: "0,6" },
          { group: "PÓLENES MALEZAS", name: "Salsola kali", concentration: "0,06" },
          { group: "PÓLENES ÁRBOLES", name: "Cupressus arizonica", concentration: "1" },
          { group: "PÓLENES ÁRBOLES", name: "Fraxinus excelsior", concentration: "1" },
          { group: "PÓLENES ÁRBOLES", name: "Olea europaea", concentration: "0,77" },
          { group: "PÓLENES ÁRBOLES", name: "Platanus acerifolia", concentration: "1" },
          { group: "EPITELIOS", name: "Epitelio de gato", concentration: "0,33" },
          { group: "EPITELIOS", name: "Epitelio de perro", concentration: "0,17" },
          { group: "HONGOS", name: "Alternaria alternata", concentration: "0,07" },
        ],
        standardization: "La actividad biológica de los alérgenos estandarizados biológicamente se calcula de acuerdo con las \"Nordic Guidelines\" mediante pruebas \"in vivo\": pruebas cutáneas mediante prick test realizadas en alrededor de 30 pacientes alérgicos seleccionados de acuerdo a la normativa de la EAACI. A dichos pacientes se les realiza prick-test a 4 diluciones por duplicado del extracto a estandarizar, junto con un control positivo y un control negativo. De esta forma se determina el valor HEPD, que se define como la concentración del extracto que produce en el paciente medio un área de la pápula igual a la histamina a 10 mg/mL, siendo el valor de 1 HEPD igual a 10.000 UB."
      },
    },
    indications: "Rinitis, conjuntivitis o asma por hipersensibilidad IgE mediada a alérgenos inhalados.",
    adminRoute: "Subcutánea",
    distribution: ["España"],
    storage: {
      conditions: "Conservar en nevera (entre 2ºC y 8ºC). No congelar.",
    },
    presentation: {
      inicio: {
        vialsDesc: "El especialista puede decidir cómo inicia el tratamiento, siendo posible prescindir de los viales 1 ó 2.",
        diluentDesc: null,
        table: [
          { label: "VERDE", labelColor: "green", vial: "Vial nº 1", venom: "", recomposition: "3.6 ml", concentration: "1/100" },
          { label: "AMARILLA", labelColor: "yellow", vial: "Vial nº 2", venom: "", recomposition: "3.6 ml", concentration: "1/10" },
          { label: "ROJA", labelColor: "red", vial: "Vial nº 3", venom: "", recomposition: "4.5 ml", concentration: "1/1" },
        ],
      },
      continuacion: {
        vialsDesc: "El envase puede contener 1 ó 2 viales número 3.",
        diluentDesc: null,
        table: [
          { label: "ROJA", labelColor: "red", vial: "Vial nº 3", venom: "", recomposition: "4,5 ml", concentration: "1/1" },
          { label: "ROJA", labelColor: "red", vial: "Vial nº 3", venom: "", recomposition: "4,5 ml", concentration: "1/1" },
        ],
      },
    },
    dosage: {
      conventional: {
        initiation: [
          { vial: "VIAL 1 (Verde)", volume: "0,1", interval: "1 semana" },
          { vial: "VIAL 1 (Verde)", volume: "0,2", interval: "1 semana" },
          { vial: "VIAL 1 (Verde)", volume: "0,4", interval: "1 semana" },
          { vial: "VIAL 1 (Verde)", volume: "0,8", interval: "1 semana" },
          { vial: "VIAL 2 (Amarilla)", volume: "0,1", interval: "1 semana" },
          { vial: "VIAL 2 (Amarilla)", volume: "0,2", interval: "1 semana" },
          { vial: "VIAL 2 (Amarilla)", volume: "0,4", interval: "1 semana" },
          { vial: "VIAL 2 (Amarilla)", volume: "0,8", interval: "1 semana" },
          { vial: "VIAL 3 (Roja)", volume: "0,1", interval: "1 semana" },
          { vial: "VIAL 3 (Roja)", volume: "0,2", interval: "1 semana" },
          { vial: "VIAL 3 (Roja)", volume: "0,4", interval: "1 semana" },
          { vial: "VIAL 3 (Roja)", volume: "0.6", interval: "1 semana" },
          { vial: "VIAL 3 (Roja)", volume: "0,8", interval: "1 semana" },
        ],
        maintenance: [
          { vial: "0,8 ml", volume: "quincenal", interval: "Repetir la dosis máxima terapéutica" },
          { vial: "0,8 ml", volume: "mensual", interval: "Repetir la dosis máxima terapéutica" },
        ],
      },
      cluster: {
        initiation: [
          { vial: "VIAL 3 (Roja)", volume: "0,1 ml + 0.2 ml", interval: "1er. día (cada 30-45 min*)" },
          { vial: "VIAL 3 (Roja)", volume: "0,4 ml + 0.4 ml", interval: "1 semana (cada 30-45 min*)" },
          { vial: "VIAL 3 (Roja)", volume: "0,8 ml", interval: "1 semana" },
        ],
        maintenance: [
          { vial: "VIAL 3 (Roja)", volume: "0,8", interval: "Mensual hasta terminar el contenido del vial" },
        ],
      },
      alternative: {
        initiation: [],
        maintenance: [],
      },
    },
    packageDuration: {
      initiation: "Inicio nº 1-2-3: 172 días. Inicio nº 2-3: 144 días. Inicio nº 2-3-3: 315 días",
      continuation: "90 días (1 vial 3) y 180 días (2 viales 3)",
    },
  },
  {
    id: 15,
    name: "APHITER POLIMERIZADO",
    manufacturer: "ASAC PHARMACEUTICAL INMUOLOGY",
    characteristics: "Tratamiento de inmunoterapia individualizado, constituido por extractos alergénicos polimerizados con glutaraldehido, de acuerdo a la composición determinada en la prescripción médica. Conservar en nevera (entre 2ºC y 8ºC).",
    composition: {
      galenic: ["Sustancia activa: Suspensión estéril compuesta por alérgenos a los que está sensibilizado el paciente, extraídos  fraccionadamente, purificados por ultrafiltración, valorados por técnicas  inmunoquímicas, polimerizados con glutaraldehído y diluidos en solución salina  fisiológica para inmunoterapia específica. ", "Excipientes: fenol, cloruro sódico y agua para inyección."],
      allergenic: {
        allergens: [
          { group: "ÁCAROS", name: "D. pteronyssinus", concentration: "0,3" },
          { group: "ÁCAROS", name: "D. farinae", concentration: "0,3" },
          { group: "ÁCAROS", name: "Mezcla Dermatophagoides (D. Pteronissinus y D. Farinae)", concentration: "0,3" },
          { group: "ÁCAROS", name: "Lepidoglyphus destructor", concentration: "0,6" },
          { group: "ÁCAROS", name: "Blomia tropicalis", concentration: "0,2" },
          { group: "PÓLENES GRAMÍNEAS", name: "Gramíneas salvajes* (Lolium, Poa, Phleum y Dactylis)", concentration: "0,3" },
          { group: "PÓLENES GRAMÍNEAS", name: "Cynodon dactylon", concentration: "0,35" },
          { group: "PÓLENES GRAMÍNEAS", name: "Lolium perenne", concentration: "0,3" },
          { group: "PÓLENES GRAMÍNEAS", name: "Phragmites communis", concentration: "0,35" },
          { group: "PÓLENES MALEZAS", name: "Parietaria judaica", concentration: "0,2" },
          { group: "PÓLENES MALEZAS", name: "Salsola kali", concentration: "0,06" },
          { group: "PÓLENES ÁRBOLES", name: "Cupressus arizonica", concentration: "1" },
          { group: "PÓLENES ÁRBOLES", name: "Olea europaea", concentration: "0,77" },
          { group: "PÓLENES ÁRBOLES", name: "Platanus acerifolia", concentration: "1" }
        ],
        standardization: "La actividad biológica de los alérgenos estandarizados biológicamente se calcula de acuerdo con las \"Nordic Guidelines\" mediante pruebas \"in vivo\": pruebas cutáneas skin prick test realizadas en alrededor de 30 pacientes alérgicos seleccionados de acuerdo a la normativa de la EAACI. A dichos pacientes se les realiza skin prick-test a 4 diluciones por duplicado del extracto a estandarizar, junto con un control positivo y un control negativo. De esta forma se determina el valor HEPD, que se define como la concentración del extracto que produce en el paciente medio un área de la pápula igual a la histamina a 10 mg/mL, siendo el valor de 1 HEPD igual a 10.000 UB."
      }
    },
    indications: "Rinitis, conjuntivitis o asma por hipersensibilidad IgE mediada a alérgenos inhalados.",
    adminRoute: "Inyectable por vía subcutánea",
    distribution: ["España"],
    storage: {
      conditions: "Conservar en nevera (entre 2ºC y 8ºC)."
    },
    presentation: {
      inicio: {
        vialsDesc: "Se suministran en viales con la solución del extracto alergénico etiquetados por números y colores.\nTratamiento de Iniciación:",
        table: [
          { label: "Verde", labelColor: "green", vial: "Vial nº 1", venom: "", recomposition: "3 ml", concentration: "1/100" },
          { label: "Amarilla", labelColor: "yellow", vial: "Vial nº 2", venom: "", recomposition: "3 ml", concentration: "1/10" },
          { label: "Roja", labelColor: "red", vial: "Vial nº 3", venom: "", recomposition: "3 ml", concentration: "1/1" }
        ]
      },
      continuacion: {
        vialsDesc: "El envase puede contener 1 ó 2 viales número 3.",
        table: [
          { label: "Roja", labelColor: "red", vial: "Vial nº 3", venom: "", recomposition: "3 ml", concentration: "1/1" }
        ]
      }
    },
    dosage: {
      conventional: {
        initiation: [
          { vial: "Verde (1)", volume: "0.5 ml", interval: "1 semana" },
          { vial: "Amarilla (2)", volume: "0.5 ml", interval: "1 semana" },
          { vial: "Roja (3)", volume: "0.5 ml", interval: "1 semana" }
        ],
        maintenance: []
      },
      cluster: {
        initiation: [
          { vial: "Roja 3", volume: "0,2 ml + 0.3 ml*", interval: "1er. día" }
        ],
        maintenance: []
      },
      alternative: {
        initiation: [],
        maintenance: []
      }
    },
    packageDuration: {
      initiation: "6 meses",
      continuation: "6 meses (1 vial 3) y 12 meses (2 viales 3)"
    }
  },
  {
    id: 16,
    name: "APHITER POLIMERIZADO 100",
    manufacturer: "ASAC PHARMACEUTICAL INMUOLOGY",
    characteristics: "Apither Polimerizado 100 es un tratamiento de inmunoterapia subcutánea individualizada a altas dosis. Está constituido por extractos alergénicos polimerizados con glutaraldehído a los que está sensibilizado el paciente, constituyendo una mezcla de dos o tres alérgenos a máxima concentración terapéutica. Apither Polimerizado 100 se prepara de forma individualizada para cada paciente, en base a la composición determinada por el especialista en la prescripción médica.  Conservar en nevera entre 2ºC y 8ºC.",
    composition: {
      galenic: ["Principio activo: Dos o tres extractos alergénicos modificados a la máxima concentración terapéutica según la prescripción del médico especialista. ", "Excipientes: Glutaraldehído, fenol y solución salina"],
      allergenic: {
        allergens: [
          { group: "ÁCAROS", name: "Blomia tropicalis", concentration: "0,1" },
          { group: "ÁCAROS", name: "D. farinae", concentration: "0,3" },
          { group: "ÁCAROS", name: "D. pteronyssinus", concentration: "0,3" },
          { group: "ÁCAROS", name: "Lepidoglyphus destructor", concentration: "0,6" },
          { group: "PÓLENES", name: "Artemisia vulgaris", concentration: "0,6" },
          { group: "PÓLENES", name: "Chenopodium album", concentration: "0,15" },
          { group: "PÓLENES", name: "Cupressaceae spp*", concentration: "0,77" },
          { group: "PÓLENES", name: "Gramíneas salvajes**", concentration: "0,3" },
          { group: "PÓLENES", name: "Olea europaea", concentration: "0,77" },
          { group: "PÓLENES", name: "Parietaria judaica", concentration: "0,2" },
          { group: "PÓLENES", name: "Plantago lanceolata", concentration: "0,6" },
          { group: "PÓLENES", name: "Platanus acerifolia", concentration: "0,68" },
          { group: "PÓLENES", name: "Salsola kali", concentration: "0,06" }
        ],
        standardization: "La actividad biológica de los alérgenos estandarizados biológicamente se calcula según las Nordic Guidelines mediante pruebas in vivo (pruebas cutáneas skin prick test) realizadas en un grupo de aproximadamente 30 pacientes alérgicos sensibilizados al alérgeno que se desea estandarizar. Estos pacientes son seleccionados de acuerdo a la normativa de la EAACI y presentan una clínica clara de rinitis o asma alérgica y empeoramiento de los síntomas durante la exposición al alérgeno. A dichos pacientes se les realiza skin prick test a 4 diluciones por duplicado del extracto a estandarizar, junto con un control positivo y un control negativo; de esta forma se determina el valor de HEPD, que se define como la concentración del extracto que produce en el paciente medio un área de la pápula igual a la producida con diclorhidrato de histamina a una concentración de 10 mg/mL"
      }
    },
    indications: "Rinitis, conjuntivitis y/o asma bronquial por hipersensibilidad IgE mediada a alérgenos inhalados",
    adminRoute: "Subcutánea",
    distribution: ["España"],
    storage: {
      conditions: "Conservar en nevera entre 2ºC y 8ºC."
    },
    presentation: {
      inicio: {
        vialsDesc: "Apither Polimerizado 100 se presenta en viales con la solución del extracto alergénico a diferentes concentraciones, etiquetados con números y colores.\nTratamiento de iniciación\nEl tratamiento de iniciación puede estar compuesto por tres viales (1,2,3), dos viales (3,3) o un vial (3).",
        table: [
          { label: "Verde", labelColor: "green", vial: "VIAL 1", venom: "", recomposition: "3 mL", concentration: "1/100" },
          { label: "Amarilla", labelColor: "yellow", vial: "VIAL 2", venom: "", recomposition: "3 mL", concentration: "1/10" },
          { label: "Roja", labelColor: "red", vial: "VIAL 3", venom: "", recomposition: "3 mL", concentration: "1/1" }
        ]
      },
      continuacion: {
        vialsDesc: "Tratamiento de mantenimiento\nEl tratamiento de mantenimiento puede estar compuesto por un vial (3) o dos viales (3,3) a máxima concentración terapéutica.",
        table: [
          { label: "Roja", labelColor: "red", vial: "VIAL 3", venom: "", recomposition: "3 mL", concentration: "1/1" }
        ]
      }
    },
    dosage: {
      conventional: {
        initiation: [
          { vial: "VIAL 1", volume: "0,5 ml", interval: "1ª semana" },
          { vial: "VIAL 2", volume: "0,5 ml", interval: "2ª semana" },
          { vial: "VIAL 3", volume: "0,5 ml", interval: "3ª semana" }
        ],
        maintenance: [
          { vial: "VIAL 3", volume: "0,5 ml", interval: "Mensual hasta terminar el contenido del vial" }
        ]
      },
      cluster: {
        initiation: [
          { vial: "VIAL 3", volume: "0,2 + 0,3 ml*", interval: "30-45 min" },
          { vial: "VIAL 3", volume: "0,5 ml", interval: "1er mes" },
          { vial: "VIAL 3", volume: "0,5 ml", interval: "2º mes" }
        ],
        maintenance: [
          { vial: "VIAL 3", volume: "0,5 ml", interval: "Mensual hasta terminar el contenido del vial" }
        ]
      },
      alternative: {
        initiation: [],
        maintenance: []
      }
    },
    packageDuration: {
      initiation: "3 viales (1,2,3): 180 días, 2 viales (3,3): 360 días, 1 vial (3): 180 días",
      continuation: "1 vial (3): 180 días, 2 viales (3,3): 360 días"
    }
  },
  {
    id: 17,
    name: "AQUAGEN SQ- HIMENOPTEROS",
    manufacturer: "ALK ABELLO",
    characteristics: "Aquagen SQ es el nombre comercial de una serie de extractos alergénicos liofilizados estandarizados inmunoquímica y biológicamente.  La actividad biológica viene expresada en unidades SQ/ml. Conservar en nevera (entre 2ºC y 8ºC). No congelar.",
    composition: {
      galenic: ["A/ Sustancias activas:  Según fórmula solicitada por el especialista.  Veneno de himenópteros disponibles: Apis mellifera y Vespula spp", "B/ Excipientes:                                 Liofilizado: Manitol Diluyente ALK: Albúmina sérica humana, Cloruro sódico, Fenol, Hidrogenocarbonato de sodio y Agua para inyección "],
      allergenic: {
        allergens: ["Veneno de Apis mellifera", "Veneno de Vespula spp"],
        standardization: "La actividad biológica viene expresada en unidades SQ/ml. 100.000 SQ/ml = 100 mcg veneno"
      }
    },
    indications: "Tratamiento de la hipersensibilidad mediada por IgE en pacientes diagnosticados de alergia a veneno de himenópteros.",
    adminRoute: "Subcutánea",
    distribution: ["Alemania", "Austria", "Italia", "España", "Noruega", "Holanda"],
    storage: {
      conditions: "Conservar en nevera (entre 2ºC y 8ºC). No congelar."
    },
    presentation: {
      inicio: {
        vialsDesc: "Set de iniciación: Formado por 1 vial de extracto alergénico liofilizado (vial nº 4) y 4 frascos de diluyente ALK de 5 ml.  El vial de liofilizado se reconstituye con 4,5 ml de diluyente ALK.",
        table: [
          { label: "Vial 1", labelColor: "gray", vial: "Vial 1", venom: "", recomposition: "", concentration: "100 SQ/ml" },
          { label: "Vial 2", labelColor: "green", vial: "Vial 2", venom: "", recomposition: "", concentration: "1.000 SQ/ml" },
          { label: "Vial 3", labelColor: "yellow", vial: "Vial 3", venom: "", recomposition: "", concentration: "10.000 SQ/ml" },
          { label: "Vial 4", labelColor: "red", vial: "Vial 4", venom: "", recomposition: "", concentration: "100.000 SQ/ml" }
        ]
      },
      continuacion: {
        vialsDesc: "Set de mantenimiento: Formado por 1 frasco multidosis de extracto alergénico liofilizado (vial 4) y un frasco de diluyente ALK de 5 ml.  Cada frasco multidosis de vial nº 4 se reconstituye con 4,5 ml de diluyente ALK (1 ml del Vial 4 = 100.000 SQ/ml = 100 mcg veneno).",
        table: []
      }
    },
    dosage: {
      conventional: {
        initiation: [
          { vial: "Vial 1", volume: "0,1", interval: "Día 1" },
          { vial: "Vial 2", volume: "0,1", interval: "Día 8" },
          { vial: "Vial 3", volume: "0,1", interval: "Día 15" },
          { vial: "Vial 3", volume: "0,5", interval: "Día 22" },
          { vial: "Vial 4", volume: "0,1", interval: "Día 29" },
          { vial: "Vial 4", volume: "0,2", interval: "Día 36" },
          { vial: "Vial 4", volume: "0,3", interval: "Día 43" },
          { vial: "Vial 4", volume: "0,4", interval: "Día 50" },
          { vial: "Vial 4", volume: "0,5", interval: "Día 57" },
          { vial: "Vial 4", volume: "0,6", interval: "Día 64" },
          { vial: "Vial 4", volume: "0,8", interval: "Día 71" },
          { vial: "Vial 4", volume: "1,0", interval: "Día 78" }
        ],
        maintenance: []
      },
      cluster: {
        initiation: [
          { vial: "Vial 1", volume: "0,1", interval: "Día 1" },
          { vial: "Vial 1", volume: "0,5", interval: "Día 1" },
          { vial: "Vial 2", volume: "0,1", interval: "Día 1" },
          { vial: "Vial 2", volume: "0,3", interval: "Día 1" },
          { vial: "Vial 2", volume: "0,5", interval: "Día 8" },
          { vial: "Vial 2", volume: "0,8", interval: "Día 8" },
          { vial: "Vial 3", volume: "0,1", interval: "Día 8" },
          { vial: "Vial 3", volume: "0,2", interval: "Día 8" },
          { vial: "Vial 3", volume: "0,4", interval: "Día 15" },
          { vial: "Vial 3", volume: "0,6", interval: "Día 15" },
          { vial: "Vial 3", volume: "0,8", interval: "Día 15" },
          { vial: "Vial 4", volume: "0,1", interval: "Día 15" },
          { vial: "Vial 4", volume: "0,1", interval: "Día 22" },
          { vial: "Vial 4", volume: "0,2", interval: "Día 22" },
          { vial: "Vial 4", volume: "0,4", interval: "Día 22" },
          { vial: "Vial 4", volume: "0,5", interval: "Día 29" },
          { vial: "Vial 4", volume: "0,5", interval: "Día 29" },
          { vial: "Vial 4", volume: "1", interval: "Día 36" }
        ],
        maintenance: []
      },
      alternative: {
        initiation: [
          { vial: "Vial 3", volume: "0,5", interval: "Día 1" },
          { vial: "Vial 4", volume: "0,1", interval: "Día 1" },
          { vial: "Vial 4", volume: "0,2", interval: "Día 1" },
          { vial: "Vial 4", volume: "0,2", interval: "Día 1" },
          { vial: "Vial 4", volume: "0,5", interval: "Día 8" },
          { vial: "Vial 4", volume: "0,5", interval: "Día 8" },
          { vial: "Vial 4", volume: "1", interval: "Día 22" }
        ],
        maintenance: []
      }
    },
    packageDuration: {
      initiation: "Depende de la pauta seleccionada",
      continuation: "4 meses"
    }
  },
  {
    id: 18,
    name: "BELTAVAC DEPOT",
    manufacturer: "PROBELTE",
    characteristics: "Beltavac® Depot es una vacuna terapéutica específica e individualizada obtenida a partir de extractos alergénicos estandarizados biológicamente en unidades RC/ml o valorados en unidades UNP/ml, dependiendo de los componentes incluidos en la formulación.  Los extractos alergénicos son adsorbidos en gel de hidróxido de aluminio en solución salina fenolada. El producto se prepara en soluciones terapéuticas individuales de acuerdo con la composición determinada en la prescripción médica. Conservar de 2 °C a 8 °C (en nevera). No congelar. Por tratarse de un producto biológico podrá presentar, según las series, ligeras variaciones en la coloración, que no afectan a la actividad terapéutica del producto.",
    composition: {
      galenic: ["Los principios activos de Beltavac® Depot son extractos alergénicos estandarizados biológicamente en unidades RC o en UNP, dependiendo de los componentes incluidos en la formulación. Los alérgenos incluidos en la fórmula se indican en el envase y son prescritos, previo diagnóstico, por el médico especialista. Los demás componentes (excipientes) son gel de hidróxido de aluminio, cloruro sódico, fenol (conservante) y agua para inyección."],
      allergenic: {
        allergens: [
          { group: "ÁCAROS", name: "Dermatophagoides pteronyssinus", concentration: "0.1 RC/ml" },
          { group: "ÁCAROS", name: "Dermatophagoides farinae", concentration: "0.1 RC/ml" },
          { group: "ÁCAROS", name: "Mezcla Dermatophagoides (1:1)", concentration: "0.1 RC/ml" },
          { group: "ÁCAROS", name: "Blomia tropicalis", concentration: "0.1 RC/ml" },
          { group: "ÁCAROS", name: "Lepidoglyphus destructor", concentration: "1 RC/ml" },
          { group: "ÁCAROS", name: "Tyrophagus putrescentiae", concentration: "1 RC/ml" },
          { group: "PÓLENES GRAMÍNEAS", name: "Avena sativa", concentration: "1 RC/ml" },
          { group: "PÓLENES GRAMÍNEAS", name: "Cynodon dactylon", concentration: "1 RC/ml" },
          { group: "PÓLENES GRAMÍNEAS", name: "Dactylis glomerata", concentration: "1 RC/ml" },
          { group: "PÓLENES GRAMÍNEAS", name: "Festuca pratensis", concentration: "1 RC/ml" },
          { group: "PÓLENES GRAMÍNEAS", name: "Holcus lanatus", concentration: "1 RC/ml" },
          { group: "PÓLENES GRAMÍNEAS", name: "Hordeum vulgare", concentration: "1 RC/ml" },
          { group: "PÓLENES GRAMÍNEAS", name: "Lolium perenne", concentration: "1 RC/ml" },
          { group: "PÓLENES GRAMÍNEAS", name: "Phleum pratense", concentration: "1 RC/ml" },
          { group: "PÓLENES GRAMÍNEAS", name: "Phragmites communis", concentration: "1 RC/ml" },
          { group: "PÓLENES GRAMÍNEAS", name: "Poa pratensis", concentration: "1 RC/ml" },
          { group: "PÓLENES GRAMÍNEAS", name: "Secale cereale", concentration: "1 RC/ml" },
          { group: "PÓLENES GRAMÍNEAS", name: "Triticum aestivum", concentration: "1 RC/ml" },
          { group: "PÓLENES GRAMÍNEAS", name: "Gramíneas cultivadas (Avena, Hordeum, Secale, Triticum)", concentration: "1 RC/ml" },
          { group: "PÓLENES GRAMÍNEAS", name: "Gramíneas espontáneas (Dactylis, Festuca, Lolium, Phleum, Poa)", concentration: "1 RC/ml" },
          { group: "PÓLENES HIERBAS", name: "Ambrosia artemisiifolia", concentration: "1 RC/ml" },
          { group: "PÓLENES HIERBAS", name: "Artemisia vulgaris", concentration: "1 RC/ml" },
          { group: "PÓLENES HIERBAS", name: "Chenopodium album", concentration: "1 RC/ml" },
          { group: "PÓLENES HIERBAS", name: "Plantago lanceolata", concentration: "1 RC/ml" },
          { group: "PÓLENES HIERBAS", name: "Parietaria judaica", concentration: "1 RC/ml" },
          { group: "PÓLENES HIERBAS", name: "Salsola kali", concentration: "1 RC/ml" },
          { group: "PÓLENES HIERBAS", name: "Mezcla hierbas (Artemisia, Chenopodium, Plantago, Taraxacum)", concentration: "1 RC/ml" },
          { group: "PÓLENES ÁRBOLES", name: "Betula pendula", concentration: "1 RC/ml" },
          { group: "PÓLENES ÁRBOLES", name: "Cupressus arizonica", concentration: "1 RC/ml" },
          { group: "PÓLENES ÁRBOLES", name: "Olea europaea", concentration: "1 RC/ml" },
          { group: "PÓLENES ÁRBOLES", name: "Platanus acerifolia", concentration: "1 RC/ml" },
          { group: "EPITELIOS", name: "Gato", concentration: "1 RC/ml" },
          { group: "EPITELIOS", name: "Perro", concentration: "1 RC/ml" },
          { group: "EPITELIOS", name: "Caballo", concentration: "1 RC/ml" },
          { group: "HONGOS", name: "Alternaria alternata", concentration: "0.2 RC/ml" }
        ],
        standardization: "Probelte Pharma expresa la potencia biológica de sus extractos en RC/ml (RC: Respuesta cutánea). Los extractos alergénicos no valorados biológicamente son valorados químicamente y se expresan en Unidades de Nitrógeno Proteico (UNP/ml)."
      }
    },
    indications: "Rinitis, conjuntivitis o asma por hipersensibilidad IgE mediada a alérgenos inhalados.",
    adminRoute: "Inyectable por vía subcutánea",
    distribution: ["España", "Italia", "Grecia", "Países Balcánicos", "Ucrania"],
    storage: {
      conditions: "Conservar de 2 °C a 8 °C (en nevera). No congelar."
    },
    presentation: {
      inicio: {
        vialsDesc: "Tratamiento de inicio: Caja con 1 vial nº 2 y 1 vial nº 3 (2,3) ó Caja con 1 vial nº 2 y 2 viales nº 3 (2,3,3).",
        table: [
          { label: "Amarillo", labelColor: "yellow", vial: "Vial nº 2", venom: "", recomposition: "4.5 ml", concentration: "1:10 vial 3" },
          { label: "Púrpura", labelColor: "purple", vial: "Vial nº 3", venom: "", recomposition: "5 ml", concentration: "0.1 (Dermatophagoides y Blomia tropicalis), 0.2 (hongos), 1 (ácaros menores, pólenes y epitelios)" }
        ]
      },
      continuacion: {
        vialsDesc: "Tratamiento de continuación: Caja con 1 ó 2 viales nº 3.",
        table: []
      }
    },
    dosage: {
      conventional: {
        initiation: [
          { vial: "Vial 2 (Amarillo)", volume: "0,2", interval: "7 días" },
          { vial: "Vial 2 (Amarillo)", volume: "0,4", interval: "7 días" },
          { vial: "Vial 2 (Amarillo)", volume: "0,8", interval: "7 días" },
          { vial: "Vial 3 (Púrpura)", volume: "0,2", interval: "7 días" },
          { vial: "Vial 3 (Púrpura)", volume: "0,4", interval: "7 días" },
          { vial: "Vial 3 (Púrpura)", volume: "0,8", interval: "7 días" }
        ],
        maintenance: [
          { vial: "Vial 3 (Púrpura)", volume: "0,8", interval: "30 días" }
        ]
      },
      cluster: {
        initiation: [
          { vial: "Vial 2 (Amarillo)", volume: "0,1", interval: "Día 0 (30 minutos)" },
          { vial: "Vial 2 (Amarillo)", volume: "0,2", interval: "Día 0" },
          { vial: "Vial 2 (Amarillo)", volume: "0,4", interval: "Día 7 (30 minutos)" },
          { vial: "Vial 2 (Amarillo)", volume: "0,6", interval: "Día 7" },
          { vial: "Vial 3 (Púrpura)", volume: "0,1", interval: "Día 14 (30 minutos)" },
          { vial: "Vial 3 (Púrpura)", volume: "0,2", interval: "Día 14" },
          { vial: "Vial 3 (Púrpura)", volume: "0,4", interval: "Día 21 (30 minutos)" },
          { vial: "Vial 3 (Púrpura)", volume: "0,4", interval: "Día 21" },
          { vial: "Vial 3 (Púrpura)", volume: "0,8", interval: "Día 36" },
          { vial: "Vial 3 (Púrpura)", volume: "0,8", interval: "Día 66" }
        ],
        maintenance: []
      },
      alternative: {
        initiation: [],
        maintenance: []
      }
    },
    packageDuration: {
      initiation: "Viales (2,3): 165 días, Viales (2,3,3): 345 días",
      continuation: "1 vial nº 3: 180 días, 2 viales nº 3: 360 días"
    },
  },
  {
    id: 19,
    name: "BELTAVAC DEPOT PLUS",
    manufacturer: "PROBELTE",
    characteristics: "Beltavac® Depot Plus es una vacuna terapéutica específica e individualizada obtenida a partir de extractos alergénicos estandarizados biológicamente en unidades RC/ml o valorados en unidades UNP/ml, dependiendo de los componentes incluidos en la formulación.  Los extractos alergénicos son adsorbidos en gel de hidróxido de aluminio en solución salina fenolada. El producto se prepara en soluciones terapéuticas individuales de acuerdo con la composición determinada en la prescripción médica. Conservar de 2 °C a 8 °C (en nevera). No congelar. Por tratarse de un producto biológico podrá presentar, según las series, ligeras variaciones en la coloración, que no afectan a la actividad terapéutica del producto.",
    composition: {
      galenic: ["Los principios activos de Beltavac® Depot Plus son extractos alergénicos estandarizados biológicamente en unidades RC o en UNP, dependiendo de los componentes incluidos en la formulación. Los alérgenos incluidos en la fórmula se indican en el envase y son prescritos, previo diagnóstico, por el médico especialista."],
      allergenic: {
        allergens: [
          { group: "ÁCAROS", name: "Dermatophagoides pteronyssinus", concentration: "0.15 RC/ml" },
          { group: "ÁCAROS", name: "Dermatophagoides farinae", concentration: "0.15 RC/ml" },
          { group: "ÁCAROS", name: "Mezcla Dermatophagoides (1:1)", concentration: "0.15 RC/ml" },
          { group: "ÁCAROS", name: "Blomia tropicalis", concentration: "0.15 RC/ml" },
          { group: "ÁCAROS", name: "Lepidoglyphus destructor", concentration: "1.5 RC/ml" },
          { group: "ÁCAROS", name: "Tyrophagus putrescentiae", concentration: "1.5 RC/ml" },
          { group: "PÓLENES GRAMÍNEAS", name: "Avena sativa", concentration: "1.5 RC/ml" },
          { group: "PÓLENES GRAMÍNEAS", name: "Cynodon dactylon", concentration: "1.5 RC/ml" },
          { group: "PÓLENES GRAMÍNEAS", name: "Dactylis glomerata", concentration: "1.5 RC/ml" },
          { group: "PÓLENES GRAMÍNEAS", name: "Festuca pratensis", concentration: "1.5 RC/ml" },
          { group: "PÓLENES GRAMÍNEAS", name: "Holcus lanatus", concentration: "1.5 RC/ml" },
          { group: "PÓLENES GRAMÍNEAS", name: "Hordeum vulgare", concentration: "1.5 RC/ml" },
          { group: "PÓLENES GRAMÍNEAS", name: "Lolium perenne", concentration: "1.5 RC/ml" },
          { group: "PÓLENES GRAMÍNEAS", name: "Phleum pratense", concentration: "1.5 RC/ml" },
          { group: "PÓLENES GRAMÍNEAS", name: "Phragmites communis", concentration: "1.5 RC/ml" },
          { group: "PÓLENES GRAMÍNEAS", name: "Poa pratensis", concentration: "1.5 RC/ml" },
          { group: "PÓLENES GRAMÍNEAS", name: "Secale cereale", concentration: "1.5 RC/ml" },
          { group: "PÓLENES HIERBAS", name: "Ambrosia artemisiifolia", concentration: "1.5 RC/ml" },
          { group: "PÓLENES HIERBAS", name: "Artemisia vulgaris", concentration: "1.5 RC/ml" },
          { group: "PÓLENES HIERBAS", name: "Chenopodium album", concentration: "1.5 RC/ml" },
          { group: "PÓLENES HIERBAS", name: "Plantago lanceolata", concentration: "1.5 RC/ml" },
          { group: "PÓLENES HIERBAS", name: "Parietaria judaica", concentration: "1.5 RC/ml" },
          { group: "PÓLENES HIERBAS", name: "Salsola kali", concentration: "1.5 RC/ml" },
          { group: "PÓLENES ÁRBOLES", name: "Betula pendula", concentration: "1.5 RC/ml" },
          { group: "PÓLENES ÁRBOLES", name: "Cupressus arizonica", concentration: "1.5 RC/ml" },
          { group: "PÓLENES ÁRBOLES", name: "Olea europaea", concentration: "1.5 RC/ml" },
          { group: "PÓLENES ÁRBOLES", name: "Platanus acerifolia", concentration: "1.5 RC/ml" },
          { group: "EPITELIOS", name: "Gato", concentration: "1.5 RC/ml" },
          { group: "EPITELIOS", name: "Perro", concentration: "1.5 RC/ml" },
          { group: "EPITELIOS", name: "Caballo", concentration: "1.5 RC/ml" },
          { group: "HONGOS", name: "Alternaria alternata", concentration: "0.3 RC/ml" }
        ],
        standardization: "Probelte Pharma expresa la potencia biológica de sus extractos en RC/ml (RC: Respuesta cutánea). Los extractos alergénicos no valorados biológicamente son valorados químicamente y se expresan en Unidades de Nitrógeno Proteico (UNP/ml)."
      }
    },
    indications: "Rinitis, conjuntivitis o asma por hipersensibilidad IgE mediada a alérgenos inhalados.",
    adminRoute: "Inyectable por vía subcutánea.",
    distribution: ["España"],
    storage: {
      conditions: "Conservar de 2 °C a 8 °C (en nevera). No congelar."
    },
    presentation: {
      inicio: {
        vialsDesc: "Tratamiento de inicio: Caja con 1 vial nº 2, 1 vial nº 3 y 1 vial nº 4 (2,3,4) o con 1 vial nº 1, un vial nº 2, 1 vial nº 3 y 1 vial nº 4 (1,2,3,4)",
        table: [
          { label: "Gris", labelColor: "gray", vial: "Vial nº 1", venom: "", recomposition: "4.5 ml", concentration: "1:100 vial 3" },
          { label: "Azul", labelColor: "blue", vial: "Vial nº 2", venom: "", recomposition: "4.5 ml", concentration: "1:10 vial 3" },
          { label: "Amarillo", labelColor: "yellow", vial: "Vial nº 3", venom: "", recomposition: "5 ml", concentration: "0.1 (Dermatophagoides y Blomia tropicalis), 0.2 (hongos), 1 (ácaros menores, pólenes y epitelios)" },
          { label: "Púrpura", labelColor: "purple", vial: "Vial nº 4", venom: "", recomposition: "5 ml", concentration: "0.15 (Dermatophagoides y Blomia tropicalis), 0.3 (hongos), 1.5 (ácaros menores, pólenes y epitelios)" }
        ]
      },
      continuacion: {
        vialsDesc: "Tratamiento de continuación: Caja con 1 ó 2 viales nº 4.",
        table: []
      }
    },
    dosage: {
      conventional: {
        initiation: [
          { vial: "Vial 2", volume: "0,2", interval: "7 días" },
          { vial: "Vial 2", volume: "0,4", interval: "7 días" },
          { vial: "Vial 2", volume: "0,8", interval: "7 días" },
          { vial: "Vial 3", volume: "0,2", interval: "7 días" },
          { vial: "Vial 3", volume: "0,4", interval: "7 días" },
          { vial: "Vial 3", volume: "0,8", interval: "7 días" },
          { vial: "Vial 4", volume: "0,8", interval: "7 días" },
          { vial: "Vial 4", volume: "1", interval: "7 días" },
          { vial: "Vial 4", volume: "1", interval: "30 días" }
        ],
        maintenance: [
          { vial: "Vial 4 (Púrpura)", volume: "0,5", interval: "30 días" },
          { vial: "Vial 4 (Púrpura)", volume: "1", interval: "30 días" }
        ]
      },
      cluster: {
        initiation: [],
        maintenance: []
      },
      alternative: {
        initiation: [],
        maintenance: []
      }
    },
    packageDuration: {
      initiation: "Viales 2,3,4: 5 meses, Viales 1,2,3,4: 5 meses",
      continuation: "1 vial nº 3: 5 meses, 2 viales nº 3: 10 meses"
    },
  },
  {
    id: 20,
    name: "BELTAVAC POLIMERIZADO PRO",
    manufacturer: "PROBELTE",
    characteristics: "Beltavac® Polimerizado PRO es una vacuna terapéutica específica e individualizada obtenida a partir de extractos alergénicos estandarizados biológicamente en unidades RC/ml.  Los extractos alergénicos polimerizados son adsorbidos en gel de hidróxido de aluminio en solución salina fenolada. El producto se prepara en soluciones terapéuticas individuales de acuerdo con la composición determinada en la prescripción médica. Conservar de 2 °C a 8 °C (en nevera). No congelar. Por tratarse de un producto biológico podrá presentar, según las series, ligeras variaciones en la coloración, que no afectan a la actividad terapéutica del producto.",
    composition: {
      galenic: ["Los principios activos de Beltavac® Polimerizado PRO son extractos alergénicos polimerizados estandarizados biológicamente en unidades RC. Los alérgenos incluidos en la fórmula se indican en el envase y son prescritos, previo diagnóstico, por el médico especialista."],
      allergenic: {
        allergens: [
          { group: "ÁCAROS", name: "Dermatophagoides pteronyssinus", concentration: "2 RC/ml" },
          { group: "ÁCAROS", name: "Dermatophagoides farinae", concentration: "2 RC/ml" },
          { group: "ÁCAROS", name: "Blomia tropicalis", concentration: "2 RC/ml" },
          { group: "ÁCAROS", name: "Lepidoglyphus destructor", concentration: "2 RC/ml" },
          { group: "PÓLENES GRAMÍNEAS", name: "Cynodon dactylon", concentration: "2 RC/ml" },
          { group: "PÓLENES GRAMÍNEAS", name: "Dactylis glomerata", concentration: "2 RC/ml" },
          { group: "PÓLENES GRAMÍNEAS", name: "Festuca pratensis", concentration: "2 RC/ml" },
          { group: "PÓLENES GRAMÍNEAS", name: "Lolium perenne", concentration: "2 RC/ml" },
          { group: "PÓLENES GRAMÍNEAS", name: "Phleum pratense", concentration: "2 RC/ml" },
          { group: "PÓLENES GRAMÍNEAS", name: "Poa pratensis", concentration: "2 RC/ml" },
          { group: "PÓLENES GRAMÍNEAS", name: "Secale cereale", concentration: "2 RC/ml" },
          { group: "PÓLENES GRAMÍNEAS", name: "Gramíneas espontáneas (Dactylis, Festuca, Lolium, Phleum, Poa)", concentration: "2 RC/ml" },
          { group: "PÓLENES HIERBAS", name: "Ambrosia artemisiifolia", concentration: "2 RC/ml" },
          { group: "PÓLENES HIERBAS", name: "Artemisia vulgaris", concentration: "2 RC/ml" },
          { group: "PÓLENES HIERBAS", name: "Chenopodium album", concentration: "2 RC/ml" },
          { group: "PÓLENES HIERBAS", name: "Plantago lanceolata", concentration: "2 RC/ml" },
          { group: "PÓLENES HIERBAS", name: "Parietaria judaica", concentration: "2 RC/ml" },
          { group: "PÓLENES HIERBAS", name: "Salsola kali", concentration: "2 RC/ml" },
          { group: "PÓLENES ÁRBOLES", name: "Betula pendula", concentration: "2 RC/ml" },
          { group: "PÓLENES ÁRBOLES", name: "Cupressus arizonica", concentration: "2 RC/ml" },
          { group: "PÓLENES ÁRBOLES", name: "Olea europaea", concentration: "2 RC/ml" },
          { group: "PÓLENES ÁRBOLES", name: "Platanus acerifolia", concentration: "2 RC/ml" },
          { group: "HONGOS", name: "Alternaria alternata", concentration: "2 RC/ml" },
          { group: "EPITELIOS", name: "Perro", concentration: "2 RC/ml" },
          { group: "EPITELIOS", name: "Gato", concentration: "2 RC/ml" }
        ],
        standardization: "La actividad alergénica total se calcula in vivo mediante prueba cutánea basada en las guías nórdicas para el registro de extractos alergénicos, elaboradas por el \"Nordic Council on Medicines\". La prueba se realiza en un número suficiente de pacientes clínicamente alérgicos y con reactividad cutánea frente al alérgeno en cuestión, que permita obtener un mínimo de 20 pacientes con resultados válidos.  Probelte Pharma expresa la potencia biológica de sus extractos en RC/ml (RC: Respuesta cutánea). Definición: \"Un extracto alergénico tiene una actividad de 1 RC/ml cuando su prick‑test induce una reacción cutánea (pápula) igual a la producida por una solución diclorhidrato de histamina 10 mg/ml en una población no inferior a 20 pacientes clínicamente alérgicos al extracto alergénico testado\".  Los extractos alergénicos no valorados biológicamente son valorados químicamente y se expresan en Unidades de Nitrógeno Proteico (UNP/ml)."
      }
    },
    indications: "Rinitis, conjuntivitis o asma por hipersensibilidad IgE mediada a alérgenos inhalados.",
    adminRoute: "Inyectable por vía subcutánea.",
    distribution: ["España", "Italia", "Portugal", "Grecia", "Países Balcánicos", "Ucrania"],
    storage: {
      conditions: "Conservar de 2 °C a 8 °C (en nevera). No congelar."
    },
    presentation: {
      inicio: {
        vialsDesc: "Tratamiento de inicio: Caja con 1 ó 2 viales de la máxima concentración.",
        table: [
          { label: "Púrpura", labelColor: "purple", vial: "Vial de máxima concentración", venom: "", recomposition: "3 ml", concentration: "2 RC/ml (1 alérgeno), 4 RC/ml (2 alérgenos), 4,5 RC/ml (>2 alérgenos)" }
        ]
      },
      continuacion: {
        vialsDesc: "Tratamiento de continuación: Caja con 1 ó 2 viales de la máxima concentración.",
        table: []
      }
    },
    dosage: {
      conventional: {
        initiation: [
          { vial: "Púrpura", volume: "0,3", interval: "7 días" },
          { vial: "Púrpura", volume: "0,5", interval: "7 días" },
          { vial: "Púrpura", volume: "0,5", interval: "15 días" },
          { vial: "Púrpura", volume: "0,5", interval: "30 días" }
        ],
        maintenance: []
      },
      cluster: {
        initiation: [
          { vial: "Púrpura", volume: "0,2", interval: "Día de inicio (30 minutos)" },
          { vial: "Púrpura", volume: "0,3", interval: "Día de inicio" },
          { vial: "Púrpura", volume: "0,5", interval: "30 días (mantenimiento)" }
        ],
        maintenance: []
      },
      alternative: {
        initiation: [],
        maintenance: []
      }
    },
    packageDuration: {
      initiation: "",
      continuation: "1 vial: 6 meses, 2 viales: 12 meses"
    },
  },
  {
    id: 21,
    name: "BELTAVEN",
    manufacturer: "PROBELTE",
    characteristics: "Beltaven® veneno de himenópteros es una preparación purificada, liofilizada y estandarizada constituida por los componentes alergénicamente activos del veneno del insecto. Beltaven® veneno de himenópteros consta de 4 viales con liofilizado para inyección más viales de diluyente específico de venenos. El producto se prepara en soluciones terapéuticas individuales de acuerdo con la composición determinada en la prescripción médica. Conservar de 2 °C a 8 °C (en nevera) en el envase original. No congelar. Proteger de la luz.",
    composition: {
      galenic: ["Los principios activos de Beltaven® son los componentes alergénicos del veneno de himenópteros estandarizados en microgramos (mcg) de proteína. Beltaven® tratamiento está compuesto de viales de veneno liofilizado y de diluyente específico.", "Contenido de los viales liofilizados: veneno de himenóptero y manitol.", "Contenido del diluyente específico de venenos: albúmina humana al 0,03 %, cloruro sódico, fenol (conservante) y agua para preparaciones inyectables."],
      allergenic: {
        allergens: ["Veneno de Apis mellifera", "Veneno de Vespula spp.", "Veneno de Polistes dominula"],
        standardization: "La cantidad de veneno es ajustada a concentración total de proteína de veneno, y según peso/volumen es expresada como mcg/ml. La dosis de veneno se ajusta a la concentración de 100 mcg/ml."
      }
    },
    indications: "Beltaven® está indicado para el diagnóstico y tratamiento de la hipersensibilidad mediada por IgE frente a veneno de himenópteros",
    adminRoute: "Subcutánea",
    distribution: ["España", "Italia", "Grecia", "Países Balcánicos"],
    storage: {
      conditions: "Conservar de 2 °C a 8 °C (en nevera) en el envase original. No congelar. Proteger de la luz."
    },
    presentation: {
      inicio: {
        vialsDesc: "Tratamiento de inicio: constituido por 4 viales con veneno de himenóptero liofilizado con 120 mcg de proteína por vial y 6 viales con 4,5 ml de diluyente específico de venenos.",
        table: []
      },
      continuacion: {
        vialsDesc: "Tratamiento de continuación: constituido por 4 viales con veneno de himenóptero liofilizado a 120 mcg de proteína por vial y 4 viales con 4,5 ml de diluyente específico de venenos.",
        table: []
      }
    },
    dosage: {
      conventional: {
        initiation: [
          { vial: "1 mcg/ml", volume: "0,1", interval: "Día 1" },
          { vial: "10 mcg/ml", volume: "0,1", interval: "Día 8" },
          { vial: "10 mcg/ml", volume: "0,5", interval: "Día 15" },
          { vial: "100 mcg/ml", volume: "0,1", interval: "Día 22" },
          { vial: "100 mcg/ml", volume: "0,2", interval: "Día 29" },
          { vial: "100 mcg/ml", volume: "0,4", interval: "Día 36" },
          { vial: "100 mcg/ml", volume: "0,6**", interval: "Día 43" },
          { vial: "100 mcg/ml", volume: "0,8**", interval: "Día 50" },
          { vial: "100 mcg/ml", volume: "1**", interval: "Día 57" }
        ],
        maintenance: []
      },
      cluster: {
        initiation: [
          { vial: "10 mcg/ml", volume: "0,5", interval: "Día 1" },
          { vial: "100 mcg/ml", volume: "0,1", interval: "Día 1" },
          { vial: "100 mcg/ml", volume: "0,2", interval: "Día 8" },
          { vial: "100 mcg/ml", volume: "0,3", interval: "Día 8" },
          { vial: "100 mcg/ml", volume: "0,5", interval: "Día 15" },
          { vial: "100 mcg/ml", volume: "0,5", interval: "Día 15" },
          { vial: "100 mcg/ml", volume: "1*", interval: "Día 29" }
        ],
        maintenance: []
      },
      alternative: {
        initiation: [
          { vial: "10 mcg/ml", volume: "0,5", interval: "Día 1" },
          { vial: "100 mcg/ml", volume: "0,1", interval: "Día 1" },
          { vial: "100 mcg/ml", volume: "0,2", interval: "Día 1" },
          { vial: "100 mcg/ml", volume: "0,2", interval: "Día 1" },
          { vial: "100 mcg/ml", volume: "0.5 ml", interval: "Día 8" },
          { vial: "100 mcg/ml", volume: "0.5 ml", interval: "Día 8" }
        ],
        maintenance: [
          { vial: "100 mcg/ml", volume: "1*", interval: "2 SEMANAS" },
          { vial: "100 mcg/ml", volume: "1*", interval: "3 SEMANAS" },
          { vial: "100 mcg/ml", volume: "1*", interval: "4 SEMANAS" }
        ]
      }
    },
    packageDuration: {
      initiation: "De 3 a 9 semanas, dependiendo de la pauta.",
      continuation: "4 meses."
    }
  },
  {
    id: 22,
    name: "CLUSTOID",
    manufacturer: "INMUNOTEK",
    characteristics: "Extractos alergénicos polimerizados con glutaraldehido y adsorbidos en gel de hidróxido de aluminio. La polimerización reduce su capacidad de unión a la IgE específica, manteniendo su capacidad inmunogénica, lo que permite alcanzar la dosis de mantenimiento de forma rápida y segura. Preparado especial a una sola concentración para pauta convencional o para pauta ultrarrápida (\"rush\"). La dosis máxima se alcanza en una semana (pauta convencional) o en 30 minutos (pauta ultrarrápida).   Conservar en frigorífico entre 2 y 8 ºC. No congelar.",
    composition: {
      galenic: ["Extracto alergénico polimerizado según formulación individualizada."],
      allergenic: {
        allergens: [
          { group: "ÁCAROS", name: "Dermatophagoides pteronyssinus", units: "10.000 UT/ml" },
          { group: "ÁCAROS", name: "Dermatophagoides farinae", units: "10.000 UT/ml" },
          { group: "ÁCAROS", name: "Lepidoglyphus destructor", units: "10.000 UT/ml" },
          { group: "ÁCAROS", name: "Tyrophagus putrescentiae", units: "10.000 UT/ml" },
          { group: "ÁCAROS", name: "Acarus siro", units: "10.000 UT/ml" },
          { group: "ÁCAROS", name: "Euroglyphus maynei", units: "10.000 UT/ml" },
          { group: "ÁCAROS", name: "Blomia tropicalis", units: "10.000 UT/ml" },
          { group: "PÓLENES DE GRAMÍNEAS", name: "Agrostis alba", units: "10.000 UT/ml" },
          { group: "PÓLENES DE GRAMÍNEAS", name: "Cynodon dactylon", units: "10.000 UT/ml" },
          { group: "PÓLENES DE GRAMÍNEAS", name: "Dactylis glomerata", units: "10.000 UT/ml" },
          { group: "PÓLENES DE GRAMÍNEAS", name: "Festuca elatior", units: "10.000 UT/ml" },
          { group: "PÓLENES DE GRAMÍNEAS", name: "Holcus lanatus", units: "10.000 UT/ml" },
          { group: "PÓLENES DE GRAMÍNEAS", name: "Lolium perenne", units: "10.000 UT/ml" },
          { group: "PÓLENES DE GRAMÍNEAS", name: "Phleum pratense", units: "10.000 UT/ml" },
          { group: "PÓLENES DE GRAMÍNEAS", name: "Phragmites communis", units: "10.000 UT/ml" },
          { group: "PÓLENES DE GRAMÍNEAS", name: "Poa pratensis", units: "10.000 UT/ml" },
          { group: "PÓLENES DE GRAMÍNEAS", name: "Secale cereale", units: "10.000 UT/ml" },
          { group: "PÓLENES DE GRAMÍNEAS", name: "Trisetum paniceum", units: "10.000 UT/ml" },
          { group: "PÓLENES DE MALEZAS", name: "Artemisia vulgaris", units: "10.000 UT/ml" },
          { group: "PÓLENES DE MALEZAS", name: "Chenopodium album", units: "10.000 UT/ml" },
          { group: "PÓLENES DE MALEZAS", name: "Parietaria judaica", units: "10.000 UT/ml" },
          { group: "PÓLENES DE MALEZAS", name: "Plantago lanceolata", units: "10.000 UT/ml" },
          { group: "PÓLENES DE MALEZAS", name: "Salsola kali", units: "10.000 UT/ml" },
          { group: "PÓLENES DE ÁRBOLES", name: "Alnus glutinosa", units: "10.000 UT/ml" },
          { group: "PÓLENES DE ÁRBOLES", name: "Betula verrucosa", units: "10.000 UT/ml" },
          { group: "PÓLENES DE ÁRBOLES", name: "Corylus avellana", units: "10.000 UT/ml" },
          { group: "PÓLENES DE ÁRBOLES", name: "Cupressus arizonica", units: "10.000 UT/ml" },
          { group: "PÓLENES DE ÁRBOLES", name: "Cupressus sempervirens", units: "10.000 UT/ml" },
          { group: "PÓLENES DE ÁRBOLES", name: "Olea europea", units: "10.000 UT/ml" },
          { group: "PÓLENES DE ÁRBOLES", name: "Platanus hispanica", units: "10.000 UT/ml" },
          { group: "EPITELIOS", name: "Epitelio de gato", units: "10.000 UT/ml" },
          { group: "EPITELIOS", name: "Epitelio de perro", units: "10.000 UT/ml" }
        ],
        standardization: "Inmunotek estandariza los extractos alergénicos siguiendo la Normativa de los Países Nórdicos (Nordic-Council-on-Medicines. Registration of allergen preparations. Nordic guidelines. Prepared by the Nordic Council on Medicines in cooperation with the Drug Regulatory Authorities in Denmark, Finland, Iceland, Norway and Sweden.Uppsala (Sweden): Nordiska Läkemedelsnämnden. 1989). En esta normativa se define que \"la actividad de un extracto alergénico tiene 10.000 Unidades Biológicas (UB) cuando produce una reacción cutánea del mismo tamaño que la que produce una solución positiva de referencia, constituida por histamina 54,3 mmol/l (dihidroclorhidrato de histamina a 10 mg/ml), cuando ambas soluciones se administran usando la misma técnica (prick test) en un mínimo de 20 individuos clínicamente alérgicos frente al extracto alergénico correspondiente\". Los extractos modificados de Inmunotek están valorados biológicamente en Unidades Terapéuticas (UT). 10000 UT contienen la misma cantidad de proteína que 10.000 UB del extracto no modificado."
      }
    },
    indications: "Rinitis, conjuntivitis y/o asma por hipersensibilidad IgE mediada a alérgenos inhalados.",
    adminRoute: "Subcutánea",
    distribution: ["España", "Alemania", "Italia", "Portugal", "Austria"],
    storage: {
      conditions: "Conservar en frigorífico entre 2 y 8 ºC. No congelar."
    },
    presentation: {
      inicio: {
        vialsDesc: "Para el tratamiento de continuación se suministran 1 ó 2 viales de 2,5 mL.",
        table: [
          { label: "Rojo", labelColor: "red", vial: "Vial Unico", venom: "", recomposition: "2.5 ml", concentration: "10.000 UT/ml" }
        ]
      },
      continuacion: {
        vialsDesc: "",
        table: []
      }
    },
    dosage: {
      conventional: {
        initiation: [
          { vial: "Rojo", volume: "0.2 ml", interval: "Día 0" },
          { vial: "Rojo", volume: "0.5 ml", interval: "Día 7" }
        ],
        maintenance: [
          { vial: "Rojo", volume: "0.5ml", interval: "Cada 30 días" }
        ]
      },
      cluster: {
        initiation: [],
        maintenance: []
      },
      alternative: {
        initiation: [
          { vial: "Rojo", volume: "0.2-0.3 ml*", interval: "Día 0" }
        ],
        maintenance: [
          { vial: "Rojo", volume: "0,5", interval: "Cada 30 días" }
        ]
      }
    },
    packageDuration: {
      initiation: "",
      continuation: "Clustod 1 vial: 5 meses - Clustoid 2 viales: 10 meses"
    },
  },
  {
    id: 23,
    name: "CLUSTOID FORTE",
    manufacturer: "INMUNOTEK",
    characteristics: "Extractos alergénicos polimerizados con glutaraldehido y adsorbidos en gel de hidróxido de aluminio. La polimerización reduce su capacidad de unión a la IgE específica, manteniendo su capacidad inmunogénica, lo que permite alcanzar la dosis de mantenimiento de forma rápida y segura. Preparado especial a una sola concentración para pauta convencional o para pauta ultrarrápida (\"rush\"). La dosis máxima se alcanza en una semana (pauta convencional) o en 30 minutos (pauta ultrarrápida). Conservar en frigorífico entre 2 y 8º C: No congelar.  ",
    composition: {
      galenic: ["Extracto alergénico polimerizado según formulación individualizada.", "Excipientes: hidróxido de aluminio, cloruro sódico, fenol y agua de calidad inyectable."],
      allergenic: {
        allergens: [
          { group: "ÁCAROS", name: "Dermatophagoides pteronyssinus", units: "30.000 UT/ml" },
          { group: "ÁCAROS", name: "Mezcla Dermatophagoides (D. Pteronissinus y D. Farinae)", units: "30.000 UT/ml" },
          { group: "PÓLENES DE GRAMÍNEAS", name: "Mezcla de 6 gramíneas: Dactylis glomerata, Festuca elatior, Holcus lanatus, Lolium perenne, Phleum pretense, Poa pratensis", units: "30.000 UT/ml" }
        ],
        standardization: "Inmunotek estandariza los extractos alergénicos siguiendo la Normativa de los Países Nórdicos (Nordic-Council-on-Medicines. Registration of allergen preparations. Nordic guidelines. Prepared by the Nordic Council on Medicines in cooperation with the Drug Regulatory Authorities in Denmark, Finland, Iceland, Norway and Sweden. Uppsala (Sweden): Nordiska Läkemedelsnämnden. 1989). En esta normativa se define que \"la actividad de un extracto alergénico tiene 10.000 Unidades Biológicas (UB) cuando produce una reacción cutánea del mismo tamaño que la que produce una solución positiva de referencia, constituida por histamina 54,3 mmol/l (dihidroclorhidrato de histamina a 10 mg/ml), cuando ambas soluciones se administran usando la misma técnica (prick test) en un mínimo de 20 individuos clínicamente alérgicos frente al extracto alergénico correspondiente\". Los extractos modificados de Inmunotek están valorados biológicamente en Unidades Terapéuticas (UT). 10.000 UT contienen la misma cantidad de proteína que 10.000 UB del extracto nativo no modificado."
      }
    },
    indications: "Rinitis, conjuntivitis y/o asma por hipersensibilidad IgE mediada a alérgenos inhalados.",
    adminRoute: "Subcutánea",
    distribution: ["España", "Portugal"],
    storage: {
      conditions: "Conservar en frigorífico entre 2 y 8º C: No congelar."
    },
    presentation: {
      inicio: {
        vialsDesc: "Mantenimiento con 1 o 2 viales de 2.5 ml.",
        table: [
          { label: "Rojo", labelColor: "red", vial: "Vial Unico", venom: "", recomposition: "2.5 ml", concentration: "30.000 UT/ml" }
        ]
      },
      continuacion: {
        vialsDesc: "",
        table: []
      }
    },
    dosage: {
      conventional: {
        initiation: [
          { vial: "Rojo", volume: "0.2 ml", interval: "Día 0" },
          { vial: "Rojo", volume: "0.5 ml", interval: "Día 7" }
        ],
        maintenance: [
          { vial: "Rojo", volume: "0.5ml", interval: "Cada 30 días" }
        ]
      },
      cluster: {
        initiation: [],
        maintenance: []
      },
      alternative: {
        initiation: [
          { vial: "Rojo", volume: "0.2-0.3 ml*", interval: "Día 0" }
        ],
        maintenance: [
          { vial: "Rojo", volume: "0,5", interval: "Cada 30 días" }
        ]
      }
    },
    packageDuration: {
      initiation: "",
      continuation: "Un vial : 5 meses. Dos viales: 10 meses"
    }
  },
  {
    id: 24,
    name: "CLUSTOID MAX",
    manufacturer: "INMUNOTEK",
    characteristics: "Extractos alergénicos polimerizados con glutaraldehido y adsorbidos en gel de hidróxido de aluminio. La polimerización reduce su capacidad de unión a la IgE específica, manteniendo su capacidad inmunogénica, lo que permite alcanzar la dosis de mantenimiento de forma rápida y segura. Preparado especial a una sola concentración para pauta convencional o para pauta ultrarrápida (\"rush\"). La dosis máxima se alcanza en una semana (pauta convencional) o en 30 minutos (pauta ultrarrápida). Conservar en frigorífico entre 2 y 8 ºC. No congelar. ",
    composition: {
      galenic: ["Extracto alergénico polimerizado según formulación individualizada.", "Excipientes: hidróxido de aluminio, cloruro sódico, fenol y agua de calidad inyectable."],
      allergenic: {
        allergens: [
          { group: "ÁCAROS", name: "Dermatophagoides pteronyssinus", units: "10.000 UT/ml" },
          { group: "ÁCAROS", name: "Mezcla Dermatophagoides (D. Pteronissinus y D. Farinae)", units: "10.000 UT/ml" },
          { group: "ÁCAROS", name: "Lepidoglyphus destructor", units: "10.000 UT/ml" },
          { group: "ÁCAROS", name: "Tyrophagus putrescentiae", units: "10.000 UT/ml" },
          { group: "ÁCAROS", name: "Blomia tropicalis", units: "10.000 UT/ml" },
          { group: "PÓLENES DE GRAMÍNEAS", name: "Mezcla de 6 gramíneas: Dactylis glomerata, Festuca elatior, Holcus lanatus, Lolium perenne, Phleum pretense, Poa pratensis", units: "10.000 UT/ml" },
          { group: "PÓLENES DE GRAMÍNEAS", name: "Mezcla de 2 gramíneas: Dactylis glomerata, Trisetum paniceum", units: "10.000 UT/ml" },
          { group: "PÓLENES DE MALEZAS", name: "Artemisia vulgaris", units: "10.000 UT/ml" },
          { group: "PÓLENES DE MALEZAS", name: "Parietaria judaica", units: "10.000 UT/ml" },
          { group: "PÓLENES DE MALEZAS", name: "Plantago lanceolata", units: "10.000 UT/ml" },
          { group: "PÓLENES DE MALEZAS", name: "Salsola kali", units: "10.000 UT/ml" },
          { group: "PÓLENES DE ÁRBOLES", name: "Betula verrucosa", units: "10.000 UT/ml" },
          { group: "PÓLENES DE ÁRBOLES", name: "Cupressus arizonica", units: "10.000 UT/ml" },
          { group: "PÓLENES DE ÁRBOLES", name: "Olea europea", units: "10.000 UT/ml" },
          { group: "PÓLENES DE ÁRBOLES", name: "Platanus hispanica", units: "10.000 UT/ml" },
          { group: "EPITELIOS", name: "Epitelio de gato", units: "10.000 UT/ml" },
          { group: "HONGOS", name: "Alternaria alternata", units: "10.000 UT/ml" },
          { group: "HONGOS + PÓLENES", name: "Alternaria + Gramíneas", units: "10.000 UT/ml para cada alérgeno" },
          { group: "HONGOS + PÓLENES", name: "Alternaria + Olea europea", units: "10.000 UT/ml para cada alérgeno" },
          { group: "HONGOS + PÓLENES", name: "Alternaria + Salsola kali", units: "10.000 UT/ml para cada alérgeno" },
          { group: "HONGOS + PÓLENES", name: "Alternaria + Gramíneas + Olea", units: "10.000 UT/ml para cada alérgeno" },
          { group: "HONGOS + ÁCAROS", name: "Alternaria + Dermatophagoides", units: "10.000 UT/ml para cada alérgeno" },
          { group: "HONGOS + ÁCAROS + PÓLENES", name: "Alternaria + Gramíneas + Dermatophagoides", units: "10.000 UT/ml para cada alérgeno" },
          { group: "HONGOS + ÁCAROS + PÓLENES", name: "Alternaria + Olea + Dermatophagoides", units: "10.000 UT/ml para cada alérgeno" }
        ],
        standardization: "Inmunotek estandariza los extractos alergénicos siguiendo la Normativa de los Países Nórdicos (Nordic-Council-on-Medicines. Registration of allergen preparations. Nordic guidelines. Prepared by the Nordic Council on Medicines in cooperation with the Drug Regulatory Authorities in Denmark, Finland, Iceland, Norway and Sweden. Uppsala (Sweden): Nordiska Läkemedelsnämnden. 1989). En esta normativa se define que \"la actividad de un extracto alergénico tiene 10.000 Unidades Biológicas (UB) cuando produce una reacción cutánea del mismo tamaño que la que produce una solución positiva de referencia, constituida por histamina 54,3 mmol/l (dihidroclorhidrato de histamina a 10 mg/ml), cuando ambas soluciones se administran usando la misma técnica (prick test) en un mínimo de 20 individuos clínicamente alérgicos frente al extracto alergénico correspondiente\". Los extractos modificados de Inmunotek están valorados biológicamente en Unidades Terapéuticas (UT). 10.000 UT contienen la misma cantidad de proteína que 10.000 UB del extracto nativo no modificado."
      }
    },
    indications: "Rinitis, conjuntivitis y/o asma por hipersensibilidad IgE mediada a alérgenos inhalados.",
    adminRoute: "Subcutánea",
    distribution: ["España", "Portugal"],
    storage: {
      conditions: "Conservar en frigorífico entre 2 y 8 ºC. No congelar."
    },
    presentation: {
      inicio: {
        vialsDesc: "Se pueden solicitar 1 o 2 viales.",
        table: [
          { label: "Rojo", labelColor: "red", vial: "Vial Unico", venom: "", recomposition: "2.5 ml", concentration: "10.000 UT/ml cada componente" }
        ]
      },
      continuacion: {
        vialsDesc: "",
        table: []
      }
    },
    dosage: {
      conventional: {
        initiation: [],
        maintenance: []
      },
      cluster: {
        initiation: [],
        maintenance: []
      },
      alternative: {
        initiation: [],
        maintenance: []
      }
    },
    packageDuration: {
      initiation: "",
      continuation: "Un vial: 5 meses - Dos viales: 10 meses"
    }
  },
  {
    id: 25,
    name: "CLUSTOID MAX FORTE",
    manufacturer: "INMUNOTEK",
    characteristics: "Extractos alergénicos polimerizados con glutaraldehido y adsorbidos en gel de hidróxido de aluminio. La polimerización reduce su capacidad de unión a la IgE específica, manteniendo su capacidad inmunogénica, lo que permite alcanzar la dosis de mantenimiento de forma rápida y segura.  Preparado especial a una sola concentración para pauta convencional o para pauta ultrarrápida (\"rush\"). La dosis máxima se alcanza en una semana (pauta convencional) o en 30 minutos (pauta ultrarrápida).  Conservar entre 2 y 8º C. No congelar.",
    composition: {
      galenic: ["Extracto alergénico polimerizado según formulación individualizada.", "Excipientes: hidróxido de aluminio, cloruro sódico, fenol y agua de calidad inyectable."],
      allergenic: {
        allergens: [
          { group: "ÁCAROS", name: "Dermatophagoides + Lepidoglyphus", units: "30.000 UT/ml + 10.000 UT/ml" },
          { group: "ÁCAROS", name: "Dermatophagoides + Blomia", units: "30.000 UT/ml + 10.000 UT/ml" },
          { group: "PÓLENES", name: "Mezcla gramíneas + Olea", units: "30.000 UT/ml + 10.000 UT/ml" },
          { group: "PÓLENES", name: "Mezcla gramíneas + Betula", units: "30.000 UT/ml + 10.000 UT/ml" },
          { group: "PÓLENES", name: "Mezcla gramíneas + Cupressus", units: "30.000 UT/ml + 10.000 UT/ml" },
          { group: "PÓLENES", name: "Mezcla gramíneas + Platanus", units: "30.000 UT/ml + 10.000 UT/ml" },
          { group: "PÓLENES  + ÁCAROS", name: "Mezcla gramíneas + D. pteronyssinus", units: "30.000 UT/ml + 10.000 UT/ml" }
        ],
        standardization: "Inmunotek estandariza los extractos alergénicos siguiendo la Normativa de los Países Nórdicos (Nordic-Council-on-Medicines. Registration of allergen preparations. Nordic guidelines. Prepared by the Nordic Council on Medicines in cooperation with the Drug Regulatory Authorities in Denmark, Finland, Iceland, Norway and Sweden. Uppsala (Sweden): Nordiska Läkemedelsnämnden. 1989). En esta normativa se define que \"la actividad de un extracto alergénico tiene 10.000 Unidades Biológicas (UB) cuando produce una reacción cutánea del mismo tamaño que la que produce una solución positiva de referencia, constituida por histamina 54,3 mmol/l (dihidroclorhidrato de histamina a 10 mg/ml), cuando ambas soluciones se administran usando la misma técnica (prick test) en un mínimo de 20 individuos clínicamente alérgicos frente al extracto alergénico correspondiente\". Los extractos modificados de Inmunotek están valorados biológicamente en Unidades Terapéuticas (UT). 10.000 UT contienen la misma cantidad de proteína que 10.000 UB del extracto nativo no modificado"
      }
    },
    indications: "Rinitis, conjuntivitis y/o asma por hipersensibilidad de tipo I (mediada por IgE) ",
    adminRoute: "Subcutánea",
    distribution: ["España", "Portugal"],
    storage: {
      conditions: "Conservar entre 2 y 8º C. No congelar."
    },
    presentation: {
      inicio: {
        vialsDesc: "",
        table: [
          { label: "Rojo", labelColor: "red", vial: "Vial Único", venom: "", recomposition: "2,5 mL", concentration: "10.000 UT/mL UN componente (MAX) Y 30.000 UT/mL el OTRO (Forte)" }
        ]
      },
      continuacion: {
        vialsDesc: "",
        table: []
      }
    },
    dosage: {
      conventional: {
        initiation: [
          { vial: "Único Rojo", volume: "0,2 mL", interval: "Día 0" },
          { vial: "Único Rojo", volume: "0,5 mL", interval: "Día 7" }
        ],
        maintenance: [
          { vial: "Único Rojo", volume: "0,5 mL", interval: "Cada 30 días" }
        ]
      },
      cluster: {
        initiation: [],
        maintenance: []
      },
      alternative: {
        initiation: [
          { vial: "Único Rojo", volume: "0,2 mL – 0,3 mL*", interval: "Día 0" }
        ],
        maintenance: [
          { vial: "Único Rojo", volume: "0,5 mL", interval: "Cada 30 días" }
        ]
      }
    },
    packageDuration: {
      initiation: "",
      continuation: "Clustoid MAX Forte (un vial): 5 meses Clustoid MAX Forte (dos viales): 10 meses"
    }
  },
  {
    id: 26,
    name: "CLUXIN",
    manufacturer: "ROXALL",
    characteristics: "Suspensión estéril de extractos alergénicos que se presentan polimerizados con glutaraldehido y diluidos en solución salina fisiológica fenolada al 0,5%. Conservar en nevera entre 2ºC y 8ºC.",
    composition: {
      galenic: ["Extractos alergénicos únicos o mezclados en función de la fórmula solicitada por el especialista.", "Excipientes: fenol y cloruro sódico."],
      allergenic: {
        allergens: [
          { group: "ÁCAROS", name: "D. pteronyssinus" },
          { group: "ÁCAROS", name: "D. farinae" },
          { group: "ÁCAROS", name: "Lepydoglihus destructor" },
          { group: "ÁCAROS", name: "Blomia tropicalis" },
          { group: "PÓLENES GRAMÍNEAS", name: "Mezcla gramíneas salvajes (Dactylis, Lolium y Phleum))" },
          { group: "PÓLENES GRAMÍNEAS", name: "Cynodon dactylon" },
          { group: "PÓLENES GRAMÍNEAS", name: "Dactylis glomerata" },
          { group: "PÓLENES GRAMÍNEAS", name: "Lolium perenne" },
          { group: "PÓLENES GRAMÍNEAS", name: "Phleum pratense" },
          { group: "PÓLENES GRAMÍNEAS", name: "Phragmites communis" },
          { group: "PÓLENES GRAMÍNEAS", name: "Secale cereale" },
          { group: "PÓLENES PLANTAS", name: "Ambrosia artemiisifolia" },
          { group: "PÓLENES PLANTAS", name: "Artemisia vulgaris" },
          { group: "PÓLENES PLANTAS", name: "Chenopodium album" },
          { group: "PÓLENES PLANTAS", name: "Parietaria judaica" },
          { group: "PÓLENES PLANTAS", name: "Plantago lanceolata" },
          { group: "PÓLENES PLANTAS", name: "Salsola kali" },
          { group: "PÓLENES ÁRBOLES", name: "Alnus glutinosa" },
          { group: "PÓLENES ÁRBOLES", name: "Betula verrucosa" },
          { group: "PÓLENES ÁRBOLES", name: "Corylus avellana" },
          { group: "PÓLENES ÁRBOLES", name: "Cupressus arizonica" },
          { group: "PÓLENES ÁRBOLES", name: "Fraxinus excelsior" },
          { group: "PÓLENES ÁRBOLES", name: "Olea europaea" },
          { group: "PÓLENES ÁRBOLES", name: "Platanus acerifolia" },
          { group: "DERIVADOS EPIDÉRMICOS", name: "Gato" },
          { group: "DERIVADOS EPIDÉRMICOS", name: "Perro" }
        ],
        standardization: "ROXALL, siguiendo las recomendaciones del Subcomité de Inmunoterapia de la EAACI, elabora los estándares biológicos de referencia basándolos en la evaluación de su actividad alergénica. Con este fin, valora sus extractos de referencia in vivo mediante bioensayo dosis-respuesta y las nuevas preparaciones de extractos alergénicos se comparan con estos extractos de referencia mediante ensayos de bioequivalencia in vitro. Actividad biológica total: se calcula in vivo por el método de titulación a punto final en prueba cutánea basado en las Guías Nórdicas para el Registro de extractos alergénicos, elaboradas por el Nordic Council on Medicines. La prueba se realiza en un número suficiente de pacientes clínicamente  alérgicos y con reactividad cutánea frente al alérgeno en cuestión, que permita obtener un mínimo de 20 pacientes con resultados válidos. En el proceso de estandarización se define el valor 1 SPT (Skin Prick Test), como aquella concentración del extracto alergénico expresada en mg/ml que produce en la población una pápula del mismo tamaño medio que la producida por una referencia positiva de histamina dihidrocloruro a una concentración de 10 mg/ml, en esa misma población. En el caso del diagnóstico, a la concentración 1 SPT se le asignan 10.000 DBU/ml, donde DBU significa \"Diagnostic Biological Units\". En el caso de los tratamientos polimerizados se utilizan las unidades TU (\"Treatment Units\"). A la concentración máxima a utilizar (vial 3) se la asignan 10.000 TU/ml en el caso de CLUXIN y 20.000 TU/ml en el caso de Allergovac Poliplus. Cantidad de alérgeno mayor: la actividad biológica total se complementa con la valoración, en unidades de masa, de los principales alérgenos mayores descritos para cada fuente alérgica."
      }
    },
    indications: "Rinitis, conjuntivitis o asma por hipersesnsibilidad IgE mediada a alérgenos inhalados.",
    adminRoute: "Subcutánea",
    distribution: ["España", "Italia", "Portugal"],
    storage: {
      conditions: "Conservar en nevera entre 2ºC y 8ºC."
    },
    presentation: {
      inicio: {
        vialsDesc: "Es posible solicitar solo un vial 3 o 2 viales 3",
        table: [
          { label: "Rojo", labelColor: "red", vial: "Vial nº 3", venom: "", recomposition: "2.5 ml", concentration: "10.000 TU/ml" },
          { label: "Rojo", labelColor: "red", vial: "Vial nº 3", venom: "", recomposition: "2.5 ml", concentration: "10.000 TU/ml" }
        ]
      },
      continuacion: {
        vialsDesc: "",
        table: []
      }
    },
    dosage: {
      conventional: {
        initiation: [
          { vial: "Roja 3", volume: "0,1 ml", interval: "Día 0" },
          { vial: "Roja 3", volume: "0,3 ml", interval: "Día 7" },
          { vial: "Roja 3", volume: "0,5 ml", interval: "Día 14" }
        ],
        maintenance: [
          { vial: "Roja 3", volume: "0.5 ml", interval: "mensual" }
        ]
      },
      cluster: {
        initiation: [
          { vial: "Roja 3", volume: "0,2 + 0.5*", interval: "1er. día" }
        ],
        maintenance: [
          { vial: "Roja 3", volume: "0,5 ml", interval: "1 mes" },
          { vial: "Roja 3", volume: "0,5 ml", interval: "1 mes" },
          { vial: "Roja 3", volume: "0,5 ml", interval: "1 mes" },
          { vial: "Roja 3", volume: "0.5 ml", interval: "mensual" }
        ]
      },
      alternative: {
        initiation: [],
        maintenance: []
      }
    },
    packageDuration: {
      initiation: "Pauta Cluster (5 meses), Pauta convencional (3 semanas y 3 meses)",
      continuation: "Pauta Cluster (10 meses), Pauta convencional (3 semanas y 8 meses)"
    }
  },
  {
    id: 27,
    name: "Cup a 1 Mol",
    manufacturer: "DIATER",
    characteristics: "Extracto alergénico en monodosis del alérgeno mayoritario de Cupressus arizonica, Cup a 1, a una concentración máxima de 3 mcg/mL. Se presenta en suspensión para administración subcutánea.",
    composition: {
      galenic: ["Sustancia activa: Proteína purificada y aislada de Cup a 1, alérgeno mayor de Cupressus arizonica.", "Excipientes: Hidróxido de aluminio, cloruro sódico y agua para inyectables."],
      allergenic: {
        mainInfo: "Cup a 1 MOL contiene la proteína purificada y aislada de Cup a 1, alérgeno mayor de Cupressus arizonica, a una concentración de 3 mcg/mL (vial máxima concentración).",
        standardization: "Extracto estandarizado biológicamente cuya potencia alergénica es expresada en contenido de alérgeno mayor Cup a 1 expresado en mcg/ml.  La estandarización biológica, se realiza de acuerdo a las \"Nordic Guidelines\" mediante pruebas \"in vivo\": pruebas cutáneas skin prick test, realizadas en alrededor de 30 pacientes alérgicos con una clínica clara de rinitis o asma alérgica y que presentan empeoramiento de los síntomas durante la exposición al alérgeno, seleccionados de acuerdo a la normativa de la EAACI. A dichos pacientes se les hace skin prick-test a 4 diluciones por duplicado del extracto a estandarizar, junto con un control positivo y un control negativo; de esta forma se determina el valor HEPD, que se define como la concentración del extracto que produce en el paciente medio un área de la pápula igual a la histamina a 10 mg/ml."
      }
    },
    indications: "Rinitis, conjuntivitis o asma por hipersensibilidad IgE mediada frente al polen de la familia Cupressaceae.",
    adminRoute: "Subcutánea",
    distribution: ["España", "Portugal"],
    storage: {
      conditions: "No conservar a temperatura superior a 25º C."
    },
    presentation: {
      inicio: {
        vialsDesc: "Tratamiento de Iniciación: Viales A-A-B-B-B-B",
        table: [
          { label: "Amarilla", labelColor: "yellow", vial: "VIAL A", venom: "", recomposition: "1 mL", concentration: "0,3 mcg/mL" },
          { label: "Roja", labelColor: "red", vial: "VIAL B", venom: "", recomposition: "1 mL", concentration: "3 mcg/mL" }
        ]
      },
      continuacion: {
        vialsDesc: "Tratamiento de mantenimiento: Consta de 3 o 6 viales número B.",
        table: [
          { label: "Roja", labelColor: "red", vial: "VIAL B", venom: "", recomposition: "1 mL", concentration: "3 mcg/mL" }
        ]
      },
    },
    dosage: {
      conventional: {
        initiation: [],
        maintenance: []
      },
      cluster: {
        initiation: [
          { vial: "VIAL A", volume: "0,1+0,2* mL", interval: "Día 1 (30 minutos)" },
          { vial: "VIAL A", volume: "0,4+0,4* mL", interval: "Día 8 (semanal)" },
          { vial: "VIAL B", volume: "0,1+0,2* mL", interval: "Día 15 (semanal)" },
          { vial: "VIAL B", volume: "0,4+0,4* mL", interval: "Día 22 (semanal)" },
          { vial: "VIAL B", volume: "0,8 mL", interval: "Día 52 (mensual)" },
          { vial: "VIAL B", volume: "0.8 mL", interval: "Día 82 (mensual)" }
        ],
        maintenance: [
          { vial: "VIAL B", volume: "0,8 mL", interval: "mensual" }
        ]
      },
      alternative: {
        initiation: [
          { vial: "VIAL B", volume: "0,1+0,2* mL", interval: "Día 1 (semanal)" },
          { vial: "VIAL B", volume: "0,4+0,4* mL", interval: "Día 8 (semanal)" },
          { vial: "VIAL B", volume: "0,8 mL", interval: "Día 38 (mensual)" },
          { vial: "VIAL B", volume: "0.8 mL", interval: "Día 68 (mensual)" }
        ],
        maintenance: []
      }
    },
    packageDuration: {
      initiation: "Viales A-A-B-B-B-B: 3 meses Viales B-B-B-B-B-B: 6 meses",
      continuation: "Mantenimiento viales B-B-B: 3 meses Mantenimiento viales B-B-B-B-B-B: 6 meses"
    }
  },
  {
    id: 28,
    name: "Cup a 1 Mol mix",
    manufacturer: "DIATER",
    characteristics: "Alérgeno mayoritario de Cupressus arizonica, Cup a 1, en solución con un extracto alergénico polimerizado de gramíneas salvajes (Dactylis glomerata, Lolium perenne, Phleum pratense y Poa pratensis) o de Olea europaea o una combinación de ambas.  Cada vial de Cup a 1 MOL MIX, contiene 4,8 μg/ml de la proteína purificada de Cup a 1 y el correspondiente extracto polimerizado a su concentración  Conservar en nevera (entre 2ºC y 8ºC). No congelar. Administrar en el día.",
    composition: {
      galenic: ["Sustancia activa: Proteína purificada de Cup a 1, alérgeno mayoritario de Cupressus arizonica, en solución con un extracto alergénico polimerizado de Gramíneas salvajes (Dactylis glomerata, Lolium perenne, Phleum pratense y Poapratensis) o de Olea europaea o una combinación de ambas. ", "Excipientes: Hidróxido de aluminio, cloruro sódico y agua para inyección. "],
      allergenic: {
        mainInfo: "Cup a 1 MOL MIX contiene Cup a 1, proteína purificada del alérgeno mayor de Cupressus arizonica, a una concentración de 4,8 μg/ml Cup a 1 y un extracto polimerizado de Gramíneas salvajes o de Olea europaea o una combinación de ambas a una concentración de acuerdo con la siguiente tabla",
        allergens: [
          { name: "Gramíneas salvajes*", concentration: "0.3 HEPD/ml" },
          { name: "Olea europaea", concentration: "0.77 HEPD/ml" },
          { name: "Gramíneas salvajes* + Olea europaea", concentration: "0.2 HEPD/ml + 0.51 HEPD/ml" }
        ],
        standardization: "Extracto estandarizado biológicamente cuya potencia alergénica es expresada en contenido de alérgeno mayor Cup a 1 expresado en μg/ml y en valor HEPD como medida de potencia alergénica del extracto polimerizado de gramíneas salvajes o de Olea o de combinación de ambas. Estos extractos polimerizados están estandarizados biológicamente de acuerdo con las \"Nordic Guidelines\" mediante pruebas \"in vivo\": pruebas cutáneas skin prick test realizadas en alrededor de 30 pacientes alérgicos con una clínica clara de rinitis o asma alérgica y que presentan empeoramiento de los síntomas durante la exposición a los alérgenos, seleccionados de acuerdo a la normativa de la EAACI. A dichos pacientes se les hace skin prick-test a 4 diluciones por duplicado del extracto a estandarizar, junto con un control positivo y un control negativo; de esta forma se determina el valor HEPD, que se define como la concentración del extracto que produce en el paciente medio un área de la pápula igual a la histamina a 10 mg/ml. "
      }
    },
    indications: "Rinitis, conjuntivitis o asma por hipersensibilidad IgE mediada a Cupressus arizonica y gramíneas salvajes (Dactylis glomerata, Lolium perenne, Phleum pratense y Poa pratensis) y/o a Olea europaea. ",
    adminRoute: "Subcutánea",
    distribution: ["España", "Portugal"],
    storage: {
      conditions: "Conservar en nevera (entre 2ºC y 8ºC). No congelar. Administrar en el día."
    },
    presentation: {
      inicio: {
        vialsDesc: "Cup a 1 MOL MIX, es un tratamiento en solución en viales monodosis, en el que cada vial contiene la(s) dosis correspondientes a un día de administración. Cup a 1 MOL MIX se comercializa con dos presentaciones de 3 o 6 viales de sustancia activa a la concentración máxima terapéutica. ",
        table: []
      },
      continuacion: {
        vialsDesc: "",
        table: []
      }
    },
    dosage: {
      conventional: {
        initiation: [],
        maintenance: []
      },
      cluster: {
        initiation: [
          { vial: "B", volume: "0.1 ml+0.1 ml*", interval: "Día 1 (semanal)" },
          { vial: "B", volume: "0.2 ml + 0.3 ml*", interval: "Día 8 (semanal)" },
          { vial: "B", volume: "0.5 ml", interval: "Día 38 (mensual)" },
          { vial: "B", volume: "0.5 ml", interval: "Mensual" }
        ],
        maintenance: [
          { vial: "B", volume: "0,5 mL", interval: "mensual" }
        ]
      },
      alternative: {
        initiation: [],
        maintenance: []
      }
    },
    packageDuration: {
      initiation: "Inicio viales B-B-B: 45 días Inicio viales B-B-B-B-B-B:  135 días",
      continuation: "Mantenimiento viales B-B-B: 90 días  Mantenimiento Viales B-B-B-B-B-B: 180 días"
    }
  },
  {
    id: 29,
    name: "DEPIFAST",
    manufacturer: "LETI",
    characteristics: "Vacuna terapéutica individualizada estandarizada biológicamente. Se prepara con extractos alergénicos despigmentados (patente nº EP0662080 propiedad de Laboratorios LETI), polimerizados con glutaraldehído y adsorbidos en hidróxido de aluminio.  Condiciones de conservación: Almacenar el producto en la nevera entre 2ºC y 8ºC. No congelar.",
    composition: {
      galenic: ["Se prepara en suspensiones terapéuticas individuales con la composición determinada en la prescripción médica.  Existe la posibilidad de solicitar cualquier mezcla cualitativa y cuantitativa.", "Excipientes: Cloruro sódico, fenol, hidróxido de aluminio y agua para inyectables."],
      allergenic: {
        allergens: [
          { group: "PÓLENES", name: "Grupo gramíneas*", concentration: "1000 DPP/ml", units: "*Grupo 5: 63" },
          { group: "PÓLENES", name: "Grupo cereales (Avena, Hordeum, Secale, Triticum)", concentration: "1000 DPP/ml" },
          { group: "PÓLENES", name: "Grupo Árboles (Alnus glutinosa, Corylus avellana)", concentration: "1000 DPP/ml" },
          { group: "PÓLENES GRAMÍNEAS", name: "Cynodon dactylon", concentration: "1000 DPP/ml" },
          { group: "PÓLENES GRAMÍNEAS", name: "Phleum pratense*", concentration: "1000 DPP/ml", units: "*Phl p 5: 63" },
          { group: "PÓLENES GRAMÍNEAS", name: "Secale cereale", concentration: "1000 DPP/ml" },
          { group: "PÓLENES HIERBAS", name: "Artemisia vulgaris", concentration: "1000 DPP/ml" },
          { group: "PÓLENES HIERBAS", name: "Chenopodium album", concentration: "1000 DPP/ml" },
          { group: "PÓLENES HIERBAS", name: "Parietaria judaica", concentration: "1000 DPP/ml" },
          { group: "PÓLENES HIERBAS", name: "Plantago lanceolata", concentration: "1000 DPP/ml" },
          { group: "PÓLENES HIERBAS", name: "Salsola kali", concentration: "1000 DPP/ml" },
          { group: "PÓLENES ÁRBOLES", name: "Betula alba", concentration: "1000 DPP/ml" },
          { group: "PÓLENES ÁRBOLES", name: "Cupressus arizonica", concentration: "1000 DPP/ml" },
          { group: "PÓLENES ÁRBOLES", name: "Olea europaea", concentration: "1000 DPP/ml" },
          { group: "PÓLENES ÁRBOLES", name: "Platanus acerifolia", concentration: "1000 DPP/ml" }
        ],
        standardization: "La Unidad de Alergia de Laboratorios LETI, siguiendo las recomendaciones del Subcomité de Inmunoterapia de la EAACI y de la Academia Americana de Alergia, Asma e Inmunología (AAAAI), elabora los estándares biológicos de referencia basándolos en la actividad alergénica total. Con este fin, estandariza sus extractos de referencia in vivo mediante bioensayos dosis-respuesta y las nuevas preparaciones de extractos alergénicos se comparan con estos extractos de referencia mediante ensayos de bioequivalencia in vitro. Los extractos Depifast están estandarizados biológicamente en unidades DPP/ml (1 DPP es el resultante de despigmentar y polimerizar un HEPL de extracto alergénico). \"Se define que la actividad de un extracto alergénico es 10 HEP (Histamine Equivalent in Prick testing) por ml cuando produce una reacción cutánea del mismo tamaño que la que produce una solución positiva de referencia, constituida por histamina 54,3 mmol/l (dihidroclorhidrato de histamina a 10 mg/ml), cuando ambas soluciones se administran usando la misma técnica (prick test) en un mínimo de 20 individuos clínicamente alérgicos frente al extracto alergénico correspondiente\". La unidad 10 HEPL se basa en la cantidad de preparación de referencia interna (PRI) que produce in vitro el 50% de inhibición de unión a IgE específica, usando el método REINA-Competición, y en la experiencia en su uso clínico. La unidad HEP está bien documentada en la bibliografía y es la unidad recomendada por el Nordic Council on Medicines en sus directrices para el registro de extractos alergénicos. La cuantificación de alérgenos mayores es la media obtenida en el último paso donde es medible de acuerdo a la normativa sobre controles de calidad de la Farmacopea Europea. Las concentraciones obtenidas están sujetas a la metodología o técnica utilizada para la medición de las mismas. Depifast se estandariza de acuerdo a la potencia alergénica total del extracto antes de la modificación, siendo por tanto la potencia biológica constante de lote a lote. "
      }
    },
    indications: "Tratamiento preestacional de la rinitis, conjuntivitis o asma por hipersensibilidad IgE mediada a alérgenos inhalados.",
    adminRoute: "Inyectable por vía subcutánea.",
    distribution: ["España", "Portugal", "Andorra", "Alemania*"],
    storage: {
      conditions: "Almacenar el producto en la nevera entre 2ºC y 8ºC. No congelar."
    },
    presentation: {
      inicio: {
        vialsDesc: "Tratamiento preestacional: Caja con 1 vial de 3 ml (concentración 1.000 DPP/ml).",
        table: [
          { label: "Vial único", labelColor: "white", vial: "Vial único", venom: "", recomposition: "3 ml", concentration: "1.000 DPP/ml" }
        ]
      },
      continuacion: {
        vialsDesc: "",
        table: []
      }
    },
    dosage: {
      conventional: {
        initiation: [],
        maintenance: []
      },
      cluster: {
        initiation: [
          { vial: "Depifast", volume: "0,2 + 0,3", interval: "30 minutos" },
          { vial: "Depifast", volume: "0,5", interval: "7 días" },
          { vial: "Depifast", volume: "0,5", interval: "7 días" },
          { vial: "Depifast", volume: "0,5", interval: "7 días" },
          { vial: "Depifast", volume: "0,5", interval: "7 días" }
        ],
        maintenance: []
      },
      alternative: {
        initiation: [],
        maintenance: []
      }
    },
    packageDuration: {
      initiation: "5 semanas.",
      continuation: ""
    }
  },
  {
    id: 30,
    name: "DEPIGOID +",
    manufacturer: "LETI",
    characteristics: "Vacuna terapéutica individualizada estandarizada biológicamente en unidades HEPL/ml equivalente (DPP*). Se prepara con extractos alergénicos despigmentados (patente nº EP0662080 propiedad de Laboratorios LETI), polimerizados con glutaraldehído y adsorbidos en hidróxido de aluminio.  *1 DPP es el resultado de despigmentar y polimerizar un HEPL.  Condiciones de conservación: Almacenar el producto en la nevera entre 2ºC y 8ºC. No congelar. ",
    composition: {
      galenic: ["Se prepara en suspensiones terapéuticas individuales con la composición determinada en la prescripción médica. Existe la posibilidad de solicitar cualquier mezcla cualitativa y cuantitativa.", "Lista de excipientes: Cloruro sódico, fenol, hidróxido de aluminio y agua para inyectables."],
      allergenic: {
        allergens: [
          { group: "ÁCAROS", name: "D. farinae", concentration: "100 DPP/ml" },
          { group: "ÁCAROS", name: "D. pteronyssinus", concentration: "100 DPP/ml" },
          { group: "ÁCAROS", name: "Mezcla Dermatophagoides", concentration: "100 DPP/ml" },
          { group: "ÁCAROS", name: "Acarus siro", concentration: "100 DPP/ml" },
          { group: "ÁCAROS", name: "Chortoglyphus arcuatus", concentration: "100 DPP/ml" },
          { group: "ÁCAROS", name: "Euroglyphus maynei", concentration: "100 DPP/ml" },
          { group: "ÁCAROS", name: "Glycyphagus domesticus", concentration: "100 DPP/ml" },
          { group: "ÁCAROS", name: "Lepidoglyphus destructor", concentration: "100 DPP/ml" },
          { group: "ÁCAROS", name: "Tyrophagus putrescentiae", concentration: "100 DPP/ml" },
          { group: "ÁCAROS", name: "Blomia tropicalis", concentration: "1000 DPP/ml" },
          { group: "PÓLENES", name: "GRUPO GRAMÍNEAS (Dactylis, Festuca, Lolium, Phleum, Poa)", concentration: "1000 DPP/ml" },
          { group: "PÓLENES", name: "GRUPO CEREALES (Avena, Hordeum, Secale, Triticum)", concentration: "1000 DPP/ml" },
          { group: "PÓLENES", name: "GRUPO HIERBAS (Artemisia, Chenopodium, Plantago, Salsola)", concentration: "1000 DPP/ml" },
          { group: "PÓLENES", name: "GRUPO ÁRBOLES (Betula alba, Cupressus arizonica, Olea europea, Platanus acerifolia )", concentration: "1000 DPP/ml" },
          { group: "HONGOS", name: "Alternaria", concentration: "100 DPP/ml" },
          { group: "EPITELIOS", name: "Gato", concentration: "100 DPP/ml" },
          { group: "EPITELIOS", name: "Perro", concentration: "100 DPP/ml" }
        ],
        standardization: "Los extractos Depigoid+ están estandarizados biológicamente en unidades HEPL/ml equivalente (DPP/ml*). \"Se define que la actividad de un extracto alergénico es 10 HEP (Histamine Equivalent in Prick testing) por ml cuando produce una reacción cutánea del mismo tamaño que la que produce una solución positiva de referencia, constituida por histamina 54,3 mmol/l (dihidroclorhidrato de histamina a 10 mg/ml), cuando ambas soluciones se administran usando la misma técnica (prick test) en un mínimo de 20 individuos clínicamente alérgicos frente al extracto alergénico correspondiente\". *1 DPP es el resultado de despigmentar y polimerizar un HEPL."
      }
    },
    indications: "Rinitis, conjuntivitis o asma por hipersensibilidad IgE mediada a alérgenos inhalados.",
    adminRoute: "Subcutánea",
    distribution: ["España", "Portugal", "Andorra"],
    storage: {
      conditions: "Almacenar el producto en la nevera entre 2ºC y 8ºC. No congelar."
    },
    presentation: {
      inicio: {
        vialsDesc: "Tratamiento de inicio: Caja con 1 o 2 viales. Se ofrece la posibilidad de solicitar diluyente solución salina y fenol (SSF) (4,5 ml)",
        table: [
          { label: "Pólenes y Blomia tropicalis", labelColor: "white", vial: "Pólenes y Blomia tropicalis", venom: "", recomposition: "2,5 ml", concentration: "1000 DPP/ml" },
          { label: "Ácaros, Alternaria y epitelio de gato y perro", labelColor: "white", vial: "Ácaros, Alternaria y epitelio de gato y perro", venom: "", recomposition: "2,5 ml", concentration: "100 DPP/ml" }
        ]
      },
      continuacion: {
        vialsDesc: "Tratamiento de continuación: Caja con 1 o 2 viales",
        table: []
      }
    },
    dosage: {
      conventional: {
        initiation: [
          { vial: "Depigoid+", volume: "0,1", interval: "7 días" },
          { vial: "Depigoid+", volume: "0,3", interval: "7 días" },
          { vial: "Depigoid+", volume: "0,5", interval: "7 días" }
        ],
        maintenance: [
          { vial: "Depigoid+", volume: "0,5", interval: "30 días" }
        ]
      },
      cluster: {
        initiation: [
          { vial: "Depigoid+", volume: "0,2", interval: "30 minutos* " },
          { vial: "Depigoid+", volume: "0,3", interval: "" }
        ],
        maintenance: [
          { vial: "Depigoid+", volume: "0,5", interval: "30 días" }
        ]
      },
      alternative: {
        initiation: [],
        maintenance: []
      }
    },
    packageDuration: {
      initiation: "Pauta convencional: 4 meses y 2 semanas (1 vial); 9 meses y semanas (2 viales)",
      continuation: "1 vial: 5 meses 2 viales: 10 meses"
    },
  },
  {
    id: 31,
    name: "DEPIGOID 3",
    manufacturer: "LETI",
    characteristics: "Vacuna terapéutica individualizada estandarizada biológicamente en unidades HEPL/ml equivalente (DPP*). Se prepara con extractos alergénicos despigmentados (patente nº EP0662080 propiedad de Laboratorios LETI), polimerizados con glutaraldehído y adsorbidos en hidróxido de aluminio.  *1 DPP es el resultado de despigmentar y polimerizar un HEPL.",
    composition: {
      galenic: ["Se prepara en suspensiones terapéuticas individuales con la composición determinada en la prescripción médica.", "Lista de excipientes: Cloruro sódico, fenol, hidróxido de aluminio y agua para inyectables."],
      allergenic: {
        allergens: [
          { group: "PÓLENES", name: "Grupo gramíneas* + Olea + Cupressus", concentration: "2000 DPP/ml" },
          { group: "PÓLENES", name: "Grupo gramíneas* + Olea + Parietaria", concentration: "2000 DPP/ml" },
          { group: "PÓLENES", name: "Grupo gramíneas* + Olea + Salsola", concentration: "2000 DPP/ml" },
          { group: "PÓLENES", name: "Grupo gramíneas* + Olea + Chenopodium", concentration: "2000 DPP/ml" }
        ],
        standardization: "Los extractos Depigoid3 están estandarizados biológicamente en unidades HEPL/ml equivalente (DPP/ml*). \"Se define que la actividad de un extracto alergénico es 10 HEP (Histamine Equivalent in Prick testing) por ml cuando produce una reacción cutánea del mismo tamaño que la que produce una solución positiva de referencia, constituida por histamina 54,3 mmol/l (dihidroclorhidrato de histamina a 10 mg/ml), cuando ambas soluciones se administran usando la misma técnica (prick test) en un mínimo de 20 individuos clínicamente alérgicos frente al extracto alergénico correspondiente\". *1 DPP es el resultado de despigmentar y polimerizar un HEPL."
      }
    },
    indications: "  Rinitis, conjuntivitis o asma por hipersensibilidad IgE mediada a alérgenos inhalados.",
    adminRoute: "Inyectable por vía subcutánea.",
    distribution: ["España", "Portugal", "Andorra"],
    storage: {
      conditions: ""
    },
    presentation: {
      inicio: {
        vialsDesc: "Se suministran en viales de 2,5 ml de suspensión alergénica, según lo indicado en la prescripción médica.",
        table: [
          { label: "Pólenes", labelColor: "white", vial: "Pólenes", venom: "", recomposition: "2,5 ml", concentration: "2.000 DPP/ml" }
        ]
      },
      continuacion: {
        vialsDesc: "",
        table: []
      }
    },
    dosage: {
      conventional: {
        initiation: [
          { vial: "Depigoid3", volume: "0,1", interval: "7 días" },
          { vial: "Depigoid3", volume: "0,3", interval: "7 días" },
          { vial: "Depigoid3", volume: "0,5", interval: "7 días" }
        ],
        maintenance: [
          { vial: "Depigoid3", volume: "0,5", interval: "30 días" }
        ]
      },
      cluster: {
        initiation: [
          { vial: "Depigoid3", volume: "0,2", interval: "30 minutos* " },
          { vial: "Depigoid3", volume: "0,3", interval: "" }
        ],
        maintenance: [
          { vial: "Depigoid3", volume: "0,5", interval: "30 días" }
        ]
      },
      alternative: {
        initiation: [],
        maintenance: []
      }
    },
    packageDuration: {
      initiation: "Pauta convencional: 4 meses y 2 semanas (1 vial); 9 meses y 2 semanas (2 viales) Pauta Rush: 5 meses (1 vial); 10 meses (2 viales)",
      continuation: "1 vial: 5 meses 2 viales: 10 meses"
    }
  },
  {
    id: 32,
    name: "DEPIGOID DUO",
    manufacturer: "LETI",
    characteristics: "Vacuna terapéutica individualizada estandarizada biológicamente en unidades HEPL/ml equivalente (DPP*) de dos componentes sin dilución de dosis, de forma que cada uno de los componentes mantiene la dosis completa que tendría cada alérgeno por separado. Se prepara con extractos alergénicos despigmentados (patente nº EP0662080 propiedad de Laboratorios LETI), polimerizados con glutaraldehído y adsorbidos en hidróxido de aluminio. ",
    composition: {
      galenic: ["Se prepara en suspensiones terapéuticas individuales con la composición determinada en la prescripción médica. Existe la posibilidad de solicitar cualquier mezcla disponible para el producto."],
      allergenic: {
        allergens: [
          { group: "ÁCAROS", name: "D.pteronyssinus +  Blomia tropicalis", concentration: "200 DPP/ml + 2000 DPP/ml" },
          { group: "ÁCAROS", name: "D.pteronyssinus +  Lepidoglyphus", concentration: "200 DPP/ml" },
          { group: "PÓLENES", name: "Grupo gramíneas* + Olea europea", concentration: "2000 DPP/ml" },
          { group: "PÓLENES", name: "Grupo gramíneas* + Betula alba", concentration: "2000 DPP/ml" },
          { group: "PÓLENES", name: "Grupo gramíneas* + Cupressus", concentration: "2000 DPP/ml" },
          { group: "PÓLENES", name: "Grupo gramíneas* + Parietaria judaica", concentration: "2000 DPP/ml" },
          { group: "PÓLENES", name: "Grupo gramíneas* + Platanus acerifolia", concentration: "2000 DPP/ml" },
          { group: "PÓLENES", name: "Grupo gramíneas* + Plantago", concentration: "2000 DPP/ml" },
          { group: "PÓLENES", name: "Grupo gramíneas* + Salsola kali", concentration: "2000 DPP/ml" },
          { group: "PÓLENES", name: "Olea europea + Cupressus arizonica", concentration: "2000 DPP/ml" },
          { group: "PÓLENES", name: "Olea europea + Salsola kali", concentration: "2000 DPP/ml" },
          { group: "PÓLENES", name: "Parietaria judaica + Cupressus arizonica", concentration: "2000 DPP/ml" },
          { group: "PÓLENES", name: "Parietaria judaica + Olea europea", concentration: "2000 DPP/ml" },
          { group: "PÓLENES", name: "Parietaria judaica + Salsola kali", concentration: "2000 DPP/ml" },
          { group: "PÓLENES", name: "Platanus acerifolia + Cupressus", concentration: "2000 DPP/ml" },
          { group: "PÓLENES", name: "Platanus acerifolia + Parietaria judaica", concentration: "2000 DPP/ml" },
          { group: "PÓLENES", name: "Platanus acerifolia + Olea europea", concentration: "2000 DPP/ml" },
          { group: "PÓLENES", name: "Salsola kali + Cupressus arizonica", concentration: "2000 DPP/ml" },
          { group: "ÁCAROS + PÓLENES", name: "D.pteronyssinus +  Gramíneas", concentration: "200 DPP/ml + 2000 DPP/ml" },
          { group: "ÁCAROS + PÓLENES", name: "D.pteronyssinus +  Olea europea", concentration: "200 DPP/ml + 2000 DPP/ml" },
          { group: "ÁCAROS + PÓLENES", name: "D.pteronyssinus +  Parietaria", concentration: "200 DPP/ml + 2000 DPP/ml" }
        ],
        standardization: "La Unidad de Alergia de Laboratorios LETI, siguiendo las recomendaciones del Subcomité de Inmunoterapia de la EAACI1 y de la Academia Americana de Alergia, Asma e Inmunología (AAAAI), elabora los estándares biológicos de referencia basándolos en la actividad alergénica total. Con este fin, estandariza sus extractos de referencia in vivo mediante bioensayos dosis-respuesta y las nuevas preparaciones de extractos alergénicos se comparan con estos extractos de referencia mediante ensayos de bioequivalencia in vitro. Los extractos Depigoid DUO están estandarizados biológicamente en unidades HEPL/ml equivalente (DPP/ml*). \"Se define que la actividad de un extracto alergénico es 10 HEP (Histamine Equivalent in Prick testing) por ml cuando produce una reacción cutánea del mismo tamaño que la que produce una solución positiva de referencia, constituida por histamina 54,3 mmol/l (dihidroclorhidrato de histamina a 10 mg/ml), cuando ambas soluciones se administran usando la misma técnica (prick test) en un mínimo de 20 individuos clínicamente alérgicos frente al extracto alergénico correspondiente\". *1 DPP es el resultado de despigmentar y polimerizar un HEPL."
      }
    },
    indications: "Rinitis, conjuntivitis o asma por hipersensibilidad IgE mediada a alérgenos inhalados.",
    adminRoute: "Subcutánea",
    distribution: ["España", "Portugal", "Andorra"],
    storage: {
      conditions: ""
    },
    presentation: {
      inicio: {
        vialsDesc: "Se suministran en viales de 2,5 ml de suspensión alergénica, según lo indicado en la prescripción médica, con las siguientes concentraciones:",
        table: [
          { label: "Pólenes", labelColor: "white", vial: "Pólenes", venom: "", recomposition: "2,5 ml", concentration: "2000 DPP/ml" },
          { label: "Ácaros", labelColor: "white", vial: "Ácaros", venom: "", recomposition: "2,5 ml", concentration: "200 DPP/ml" }
        ]
      },
      continuacion: {
        vialsDesc: "",
        table: []
      }
    },
    dosage: {
      conventional: {
        initiation: [
          { vial: "Depigoid DUO", volume: "0,1", interval: "7 días" },
          { vial: "Depigoid DUO", volume: "0,3", interval: "7 días" },
          { vial: "Depigoid DUO", volume: "0,5", interval: "7 días" }
        ],
        maintenance: [
          { vial: "Depigoid DUO", volume: "0,5", interval: "30 días" }
        ]
      },
      cluster: {
        initiation: [
          { vial: "Depigoid DUO", volume: "0,2", interval: "30 min*" },
          { vial: "Depigoid DUO", volume: "0,3", interval: "" }
        ],
        maintenance: [
          { vial: "Depigoid DUO", volume: "0,5", interval: "30 días" }
        ]
      },
      alternative: {
        initiation: [],
        maintenance: []
      }
    },
    packageDuration: {
      initiation: "Pauta convencional: 4 meses y 2 semanas (1 vial); 9 meses y semanas (2 viales) Pauta Rush: 5 meses (1 vial); 10 meses (2 viales) ",
      continuation: "1 vial: 5 meses 2 viales: 10 meses"
    }
  },
  {
    id: 33,
    name: "DEPIGOID FORTE",
    manufacturer: "LETI",
    characteristics: "Vacuna terapéutica individualizada estandarizada biológicamente en unidades HEPL/ml equivalente (DPP*). Se prepara con extractos alergénicos despigmentados (patente nº EP0662080 propiedad de Laboratorios LETI), polimerizados con glutaraldehído y adsorbidos en hidróxido de aluminio.  Condiciones de conservación: Almacenar el producto en la nevera entre 2ºC y 8ºC. No congelar. ",
    composition: {
      galenic: ["Se prepara en suspensiones terapéuticas individuales con la composición determinada en la prescripción médica.", "Excipientes: Cloruro sódico, fenol, hidróxido de aluminio y agua para inyectables."],
      allergenic: {
        allergens: [
          { group: "PÓLENES", name: "GRUPO GRAMÍNEAS (Dactylis, Festuca, Lolium, Phleum, Poa)", concentration: "3.000 DPP/ml" },
          { group: "ÁCAROS", name: "Dermatophagoides pteronissinus", concentration: "300 DPP/ml" },
          { group: "ÁCAROS", name: "Mezcla D. pteronissinus y D. farinae", concentration: "300 DPP/ml" }
        ],
        standardization: "La Unidad de Alergia de Laboratorios LETI, siguiendo las recomendaciones del Subcomité de Inmunoterapia de la EAACI y de la Academia Americana de Alergia, Asma e Inmunología (AAAAI), elabora los estándares biológicos de referencia basándolos en la actividad alergénica total. Con este fin, estandariza sus extractos de referencia in vivo mediante bioensayos dosis-respuesta y las nuevas preparaciones de extractos alergénicos se comparan con estos extractos de referencia mediante ensayos de bioequivalencia in vitro. Los extractos Depigoid FORTE están estandarizados biológicamente en unidades HEPL/ml equivalente (DPP/ml*). \"Se define que la actividad de un extracto alergénico es 10 HEP (Histamine Equivalent in Prick testing) por ml cuando produce una reacción cutánea del mismo tamaño que la que produce una solución positiva de referencia, constituida por histamina 54,3 mmol/l (dihidroclorhidrato de histamina a 10 mg/ml), cuando ambas soluciones se administran usando la misma técnica (prick test) en un mínimo de 20 individuos clínicamente alérgicos frente al extracto alergénico correspondiente\". La unidad 10 HEPL se basa en la cantidad de preparación de referencia interna (PRI) que produce in vitro el 50% de inhibición de unión a IgE específica, usando el método REINA-Competición, y en la experiencia en su uso clínico. *1 DPP es el resultado de despigmentar y polimerizar un HEPL."
      }
    },
    indications: "Rinitis, conjuntivitis y/o asma por hipersensibilidad IgE mediada a alérgenos inhalados.",
    adminRoute: "Subcutánea",
    distribution: ["España", "Portugal", "Andorra"],
    storage: {
      conditions: "Almacenar el producto en la nevera entre 2ºC y 8ºC. No congelar."
    },
    presentation: {
      inicio: {
        vialsDesc: "Tratamiento de inicio: Caja con 1 ó 2 viales.",
        table: [
          { label: "Ácaros", labelColor: "white", vial: "Ácaros", venom: "", recomposition: "2,5 ml", concentration: "300 DPP/ml" },
          { label: "Pólenes", labelColor: "white", vial: "Pólenes", venom: "", recomposition: "2,5 ml", concentration: "3.000 DPP/ml" }
        ]
      },
      continuacion: {
        vialsDesc: "Tratamiento de continuación: Caja con 1 ó 2 viales.",
        table: []
      }
    },
    dosage: {
      conventional: {
        initiation: [
          { vial: "Depigoid forte", volume: "0,1", interval: "7 días" },
          { vial: "Depigoid forte", volume: "0,3", interval: "7 días" },
          { vial: "Depigoid forte", volume: "0,5", interval: "7 días" }
        ],
        maintenance: [
          { vial: "Depigoid forte", volume: "0,5", interval: "30 días" }
        ]
      },
      cluster: {
        initiation: [
          { vial: "Depigoid forte", volume: "0,2", interval: "30 minutos* " },
          { vial: "Depigoid forte", volume: "0,3", interval: "" }
        ],
        maintenance: [
          { vial: "Depigoid forte", volume: "0,5", interval: "30 días" }
        ]
      },
      alternative: {
        initiation: [],
        maintenance: []
      }
    },
    packageDuration: {
      initiation: "Pauta convencional: 4 meses y 2 semanas (1 vial); 9 meses y 2 semanas (2 viales). Pauta Rush: 5 meses (1 vial); 10 meses (2 viales)",
      continuation: "1 vial: 5 meses, 2 viales: 10 meses"
    }
  },
  {
    id: 34,
    name: "DIATER Alt a 1",
    manufacturer: "DIATER",
    characteristics: "Extracto alergénico liofilizado en monodosis del alérgeno mayoritario de Alternaria alternata, Alt a 1. Se presenta con diluyente de recomposición para obtener una suspensión de Alt a 1 adsorbido en hidróxido de aluminio para administración subcutánea. Condiciones de Conservación:  Vial extracto liofilizado: No conservar a temperatura superior a 25º C Vial extracto reconstituido: Conservar en nevera (entre 2ºC y 8ºC)",
    composition: {
      galenic: ["Sustancia activa: Extracto alergénico liofilizado de Alt a 1, alérgeno mayoritario del hongo Alternaria alternata.", "Excipientes: Hidróxido de aluminio, cloruro sódico y agua para inyección."],
      allergenic: {
        mainInfo: "Diater Alt a 1 contiene un extracto alergénico de Alt a 1, alérgeno mayor de Alternaria alternata, a una concentración de 0,25 mcg/mL de Alt a 1 en el vial máxima concentración.",
        standardization: "Extracto estandarizado biológicamente. Su potencia alergénica es expresada en contenido de alérgeno mayor Alt a 1 en mcg/mL."
      }
    },
    indications: "Rinitis, conjuntivitis o asma por hipersensibilidad Ig E mediada a Alternaria alternata.",
    adminRoute: "Subcutánea",
    distribution: ["España", "Portugal", "Italia"],
    storage: {
      conditions: "Vial extracto liofilizado: No conservar a temperatura superior a 25º C. Vial extracto reconstituido: Conservar en nevera (entre 2ºC y 8ºC)"
    },
    presentation: {
      inicio: {
        vialsDesc: "Diater Alt a 1 se comercializa solo como al tratamiento de mantenimiento. Puede incluir 3 viales nº 4 o 5 viales nº 4",
        table: [
          { label: "Roja", labelColor: "red", vial: "Vial nº 3", venom: "", recomposition: "1 ml", concentration: "0,25 mcg/ml" },
          { label: "Roja", labelColor: "red", vial: "Vial nº 4", venom: "", recomposition: "1 ml", concentration: "0,25 mcg/ml" },
          { label: "Roja", labelColor: "red", vial: "Vial nº 4", venom: "", recomposition: "1 ml", concentration: "0,25 mcg/ml" }
        ]
      },
      continuacion: {
        vialsDesc: "",
        table: []
      }
    },
    dosage: {
      conventional: {
        initiation: [],
        maintenance: [
          { vial: "nº 4", volume: "0,8 ml", interval: "Mensual" }
        ]
      },
      cluster: {
        initiation: [],
        maintenance: []
      },
      alternative: {
        initiation: [],
        maintenance: []
      }
    },
    packageDuration: {
      initiation: "",
      continuation: "3 meses (3 viales) y 5 meses (5 viales)"
    }
  },
  {
    id: 35,
    name: "DIATER DEPOT",
    manufacturer: "DIATER",
    characteristics: "Tratamiento de inmunoterapia individualizado, constituido por extractos alergénicos a los que está sensibilizado el paciente, de administración subcutánea. Se prepara de forma individualizada para cada paciente de acuerdo a la composición determinada en la prescripción médica. Conservar en nevera (entre 2ºC y 8ºC).  ",
    composition: {
      galenic: ["Excipientes: Hidróxido de aluminio, fenol, cloruro sódico y agua para inyección.  "],
      allergenic: {
        allergens: [
          { group: "ÁCAROS", name: "Blomia tropicalis", concentration: "0,2" },
          { group: "ÁCAROS", name: "D. pteronyssinus", concentration: "0,3" },
          { group: "ÁCAROS", name: "D. farinae", concentration: "0,3" },
          { group: "ÁCAROS", name: "Lepidoglyphus destructor", concentration: "0,6" },
          { group: "ÁCAROS", name: "Tyrophagus putrescentiae", concentration: "0,05" },
          { group: "PÓLENES GRAMÍNEAS", name: "Gramíneas salvajes* ", concentration: "0,3" },
          { group: "PÓLENES GRAMÍNEAS", name: "Cynodon dactylon", concentration: "0,35" },
          { group: "PÓLENES GRAMÍNEAS", name: "Dactylis glomerata", concentration: "0,3" },
          { group: "PÓLENES GRAMÍNEAS", name: "Lolium perenne", concentration: "0,3" },
          { group: "PÓLENES GRAMÍNEAS", name: "Phleum pratense", concentration: "0,3" },
          { group: "PÓLENES GRAMÍNEAS", name: "Phragmites communis", concentration: "0,35" },
          { group: "PÓLENES GRAMÍNEAS", name: "Poa pratensis", concentration: "0,3" },
          { group: "PÓLENES MALEZAS", name: "Artemisia vulgaris", concentration: "0,6" },
          { group: "PÓLENES MALEZAS", name: "Chenopodium album", concentration: "0,15" },
          { group: "PÓLENES MALEZAS", name: "Parietaria judaica", concentration: "0,2" },
          { group: "PÓLENES MALEZAS", name: "Plantago lanceolata", concentration: "0,6" },
          { group: "PÓLENES MALEZAS", name: "Salsola kali", concentration: "0,06" },
          { group: "PÓLENES ÁRBOLES", name: "Cupressus arizonica", concentration: "1" },
          { group: "PÓLENES ÁRBOLES", name: "Fraxinus excelsior", concentration: "1" },
          { group: "PÓLENES ÁRBOLES", name: "Olea europaea", concentration: "0,77" },
          { group: "PÓLENES ÁRBOLES", name: "Platanus acerifolia", concentration: "1" },
          { group: "EPITELIOS", name: "Epitelio de gato", concentration: "0,33" },
          { group: "EPITELIOS", name: "Epitelio de perro", concentration: "0,17" },
          { group: "HONGOS", name: "Alternaria alternata", concentration: "0,07" }
        ],
        standardization: "La actividad biológica de los alérgenos estandarizados biológicamente se calcula de acuerdo con las \"Nordic Guidelines\" mediante pruebas \"in vivo\": pruebas cutáneas en prick test realizadas a unos 30 pacientes alérgicos con una clínica clara de rinitis o asma alérgica con empeoramiento de los síntomas durante la exposición al alérgeno seleccionados de acuerdo con la normativa de la EAACI. A dichos pacientes se les realiza prick-test a 4 diluciones por duplicado del extracto a estandarizar, junto con un control positivo y un control negativo. De esta forma se determina el valor HEPD que se define como la concentración del extracto que produce en el paciente medio un área de la pápula igual a la histamina a 10 mg/mL."
      }
    },
    indications: "Rinitis, conjuntivitis o asma por hipersensibilidad IgE mediada a alérgenos inhalados",
    adminRoute: "Inyectable por vía subcutánea",
    distribution: ["España", "Portugal", "Italia"],
    storage: {
      conditions: "Conservar en nevera (entre 2ºC y 8ºC)."
    },
    presentation: {
      inicio: {
        vialsDesc: "Se suministran en viales con la solución del extracto alergénico etiquetados por números y colores.\nTratamiento de iniciación\nExiste un tratamiento de iniciación con los viales 2,3,3",
        table: [
          { label: "Verde", labelColor: "green", vial: "Vial nº 1", venom: "", recomposition: "3.6 ml", concentration: "1/100" },
          { label: "Amarilla", labelColor: "yellow", vial: "Vial nº 2", venom: "", recomposition: "3.6 ml", concentration: "1/10" },
          { label: "Roja", labelColor: "red", vial: "Vial nº 3", venom: "", recomposition: "4.5 ml", concentration: "1/1" }
        ]
      },
      continuacion: {
        vialsDesc: "El envase puede contener 1 ó 2 viales número 3.",
        table: [
          { label: "Roja", labelColor: "red", vial: "Vial nº 3", venom: "", recomposition: "4.5 ml", concentration: "1/1" }
        ]
      }
    },
    dosage: {
      conventional: {
        initiation: [
          { vial: "Verde 1", volume: "0.1 ml", interval: "1 semana" },
          { vial: "Verde 1", volume: "0.2 ml", interval: "1 semana" },
          { vial: "Verde 1", volume: "0.4 ml", interval: "1 semana" },
          { vial: "Verde 1", volume: "0.8 ml", interval: "1 semana" },
          { vial: "Amarilla 2", volume: "0.1 ml", interval: "1 semana" },
          { vial: "Amarilla 2", volume: "0.2 ml", interval: "1 semana" },
          { vial: "Amarilla 2", volume: "0.4 ml", interval: "1 semana" },
          { vial: "Amarilla 2", volume: "0.8 ml", interval: "1 semana" },
          { vial: "Roja 3", volume: "0.1 ml", interval: "1 semana" },
          { vial: "Roja 3", volume: "0.2 ml", interval: "1 semana" },
          { vial: "Roja 3", volume: "0.4 ml", interval: "1 semana" },
          { vial: "Roja 3", volume: "0.6 ml", interval: "1 semana" },
          { vial: "Roja 3", volume: "0.8 ml", interval: "1 semana" }
        ],
        maintenance: [
          { vial: "Roja 3", volume: "0.8 ml", interval: "Mensual" }
        ]
      },
      cluster: {
        initiation: [
          { vial: "Roja 3", volume: "0.1 ml + 0.2 ml", interval: "1er día (cada 30-45 min*)" },
          { vial: "Roja 3", volume: "0.4 ml + 0.4 ml", interval: "1 semana (cada 30-45 min*)" },
          { vial: "Roja 3", volume: "0.8 ml", interval: "1 semana" }
        ],
        maintenance: [
          { vial: "Roja 3", volume: "0,8 ml", interval: "Mensual" }
        ]
      },
      alternative: {
        initiation: [],
        maintenance: []
      }
    },
    packageDuration: {
      initiation: "Iniciación 2-3-3: 180 días (6 meses)\nIniciación 1-2-3: 120 días (4 meses)",
      continuation: "5 meses y medio (1 vial 3) y 11 meses (2 viales 3)"
    }
  },
  {
    id: 36,
    name: "DIATER POLIMERIZADO",
    manufacturer: "DIATER",
    characteristics: "Tratamiento de inmunoterapia individualizado, constituido por extractos alergénicos polimerizados con glutaraldehido, a los que está sensibilizado el paciente. Se prepara de forma individualizada para cada paciente  de acuerdo a la composición determinada en la prescripción médica. Conservar en nevera (entre 2ºC y 8ºC).",
    composition: {
      galenic: ["Sustancia activa: Solución terapéutica de extractos alergénicos a los que está sensibilizado el paciente, preparada de forma individualizada en base a la solicitud del especialista.", "Excipientes: Glutaraldehido, fenol, cloruro sódico y agua para inyección."],
      allergenic: {
        allergens: [
          { group: "ÁCAROS", name: "Blomia tropicalis", concentration: "0,2" },
          { group: "ÁCAROS", name: "D. pteronyssinus", concentration: "0,3" },
          { group: "ÁCAROS", name: "D. farinae", concentration: "0,3" },
          { group: "ÁCAROS", name: "Lepidoglyphus destructor", concentration: "0,6" },
          { group: "PÓLENES GRAMÍNEAS", name: "Gramíneas salvajes*", concentration: "0,3" },
          { group: "PÓLENES GRAMÍNEAS", name: "Cynodon dactylon", concentration: "0,35" },
          { group: "PÓLENES GRAMÍNEAS", name: "Lolium perenne", concentration: "0,3" },
          { group: "PÓLENES GRAMÍNEAS", name: "Phragmites communis", concentration: "0,35" },
          { group: "PÓLENES MALEZAS", name: "Parietaria judaica", concentration: "0,2" },
          { group: "PÓLENES MALEZAS", name: "Salsola kali", concentration: "0,06" },
          { group: "PÓLENES ÁRBOLES", name: "Cupressus arizonica", concentration: "1" },
          { group: "PÓLENES ÁRBOLES", name: "Olea europaea", concentration: "0,77" },
          { group: "PÓLENES ÁRBOLES", name: "Platanus acerifolia", concentration: "1" }
        ],
        standardization: ""
      }
    },
    indications: "Rinitis, conjuntivitis o asma por hipersensibilidad IgE mediada a alérgenos inhalados.",
    adminRoute: "Inyectable por vía subcutánea",
    distribution: ["España", "Portugal", "Italia"],
    storage: {
      conditions: "Conservar en nevera (entre 2ºC y 8ºC)."
    },
    presentation: {
      inicio: {
        vialsDesc: "Se suministran en viales con la solución del extracto alergénico etiquetados por números y colores.\nTratamiento de Iniciación:",
        table: [
          { label: "Verde", labelColor: "green", vial: "Vial nº 1", venom: "", recomposition: "3 ml", concentration: "1/100" },
          { label: "Amarilla", labelColor: "yellow", vial: "Vial nº 2", venom: "", recomposition: "3 ml", concentration: "1/10" },
          { label: "Roja", labelColor: "red", vial: "Vial nº 3", venom: "", recomposition: "3 ml", concentration: "1/1" }
        ]
      },
      continuacion: {
        vialsDesc: "El envase puede contener 1 ó 2 viales número 3.",
        table: [
          { label: "Roja", labelColor: "red", vial: "Vial nº 3", venom: "", recomposition: "3 ml", concentration: "1/1" }
        ]
      }
    },
    dosage: {
      conventional: {
        initiation: [
          { vial: "Verde (1)", volume: "0.5 ml", interval: "1 semana" },
          { vial: "Amarilla (2)", volume: "0.5 ml", interval: "1 semana" },
          { vial: "Roja (3)", volume: "0.5 ml", interval: "1 semana" }
        ],
        maintenance: []
      },
      cluster: {
        initiation: [
          { vial: "Roja 3", volume: "0,2 ml + 0.3 ml*", interval: "1er. día" }
        ],
        maintenance: []
      },
      alternative: {
        initiation: [],
        maintenance: []
      }
    },
    packageDuration: {
      initiation: "Viales 1-2-3: 6.5 meses (195 días)\nVial 3: 6 meses (180 días)\nViales 3-3: 12 meses (360 días)",
      continuation: "1 vial 3: 6 meses (180 días)\n2 viales 3: 12 meses (360 días)"
    }
  },
  {
    id: 37,
    name: "DIATER POLIMERIZADO 100",
    manufacturer: "DIATER",
    characteristics: "Tratamiento de inmunoterapia individualizado, constituido por extractos alergénicos polimerizados con glutaraldehido, a los que está sensibilizado el paciente. Se prepara de forma individualizada para cada paciente  de acuerdo a la composición determinada en la prescripción médica. Conservar en nevera (entre 2ºC y 8ºC).",
    composition: {
      galenic: [],
      allergenic: {
        allergens: [
          { group: "ÁCAROS", name: "Blomia tropicalis", concentration: "0,2" },
          { group: "ÁCAROS", name: "D. pteronyssinus", concentration: "0,3" },
          { group: "ÁCAROS", name: "D. farinae", concentration: "0,3" },
          { group: "ÁCAROS", name: "Lepidoglyphus destructor", concentration: "0,6" },
          { group: "PÓLENES GRAMÍNEAS", name: "Gramíneas salvajes*", concentration: "0,3" },
          { group: "PÓLENES GRAMÍNEAS", name: "Cynodon dactylon", concentration: "0,35" },
          { group: "PÓLENES GRAMÍNEAS", name: "Lolium perenne", concentration: "0,3" },
          { group: "PÓLENES GRAMÍNEAS", name: "Phragmites communis", concentration: "0,35" },
          { group: "PÓLENES MALEZAS", name: "Parietaria judaica", concentration: "0,2" },
          { group: "PÓLENES MALEZAS", name: "Salsola kali", concentration: "0,06" },
          { group: "PÓLENES ÁRBOLES", name: "Cupressus arizonica", concentration: "1" },
          { group: "PÓLENES ÁRBOLES", name: "Olea europaea", concentration: "0,77" },
          { group: "PÓLENES ÁRBOLES", name: "Platanus acerifolia", concentration: "1" }
        ],
        standardization: ""
      }
    },
    indications: "Rinitis, conjuntivitis o asma por hipersensibilidad IgE mediada a alérgenos inhalados.",
    adminRoute: "Inyectable por vía subcutánea",
    distribution: ["España", "Portugal", "Italia"],
    storage: {
      conditions: "Conservar en nevera (entre 2ºC y 8ºC)."
    },
    presentation: {
      inicio: {
        vialsDesc: "Se suministran en viales con la solución del extracto alergénico etiquetados por números y colores.\nTratamiento de Iniciación:",
        table: [
          { label: "Verde", labelColor: "green", vial: "Vial nº 1", venom: "", recomposition: "3 ml", concentration: "1/100" },
          { label: "Amarilla", labelColor: "yellow", vial: "Vial nº 2", venom: "", recomposition: "3 ml", concentration: "1/10" },
          { label: "Roja", labelColor: "red", vial: "Vial nº 3", venom: "", recomposition: "3 ml", concentration: "1/1" }
        ]
      },
      continuacion: {
        vialsDesc: "El envase puede contener 1 ó 2 viales número 3.",
        table: [
          { label: "Roja", labelColor: "red", vial: "Vial nº 3", venom: "", recomposition: "3 ml", concentration: "1/1" }
        ]
      }
    },
    dosage: {
      conventional: {
        initiation: [
          { vial: "Verde (1)", volume: "0.5 ml", interval: "1 semana" },
          { vial: "Verde (1)", volume: "0.5 ml", interval: "1 semana" },
          { vial: "Verde (1)", volume: "0.5 ml", interval: "1 semana" }
        ],
        maintenance: []
      },
      cluster: {
        initiation: [
          { vial: "Roja 3", volume: "0,2 ml + 0.3 ml*", interval: "1er. día" },
          { vial: "Roja 3", volume: "0,5 ml", interval: "Mensual" }
        ],
        maintenance: []
      },
      alternative: {
        initiation: [],
        maintenance: []
      }
    },
    packageDuration: {
      initiation: "Viales 1-2-3: 6.5 meses (195 días)\nVial 3: 6 meses (180 días)\nViales 3-3: 12 meses (360 días)",
      continuation: "1 vial 3: 6 meses (180 días)\n2 viales 3: 12 meses (360 días)"
    }
  },
  {
    id: 38,
    name: "DIATER VENENO HIMENOPTEROS",
    manufacturer: "DIATER",
    characteristics: "Tratamiento de inmunoterapia individualizado, constituido por extractos alergénicos liofilizados de componentes alergénicamente activos de veneno de himenópteros para administración subcutánea, Se prepara de forma  individualizada para cada paciente de acuerdo a la composición determinada en la prescripción médica. Condiciones de Conservación: Vial extracto liofilizado: No conservar a temperatura superior a 25ºC. Vial extracto reconstituido: Conservar en nevera (entre 2ºC y 8ºC).",
    composition: {
      galenic: ["Sustancia activa: Solución terapéutica de extractos alergénicos preparada de forma individualizada en base a la solicitud del especialista.", "Excipientes: Fenol, cloruro sódico y agua para inyección."],
      allergenic: {
        allergens: ["Polistes spp"],
        standardization: "Extractos liofilizados y estériles de los componentes alergénicamente activos.  La concentración del vial 3 de 100 mcg/mL. "
      }
    },
    indications: "Tratamiento de las reacciones sistémicas producidas por el veneno de himenópteros por un mecanismo IgE mediado. ",
    adminRoute: "Inyectable por vía subcutánea",
    distribution: ["España", "Portugal", "Italia"],
    storage: {
      conditions: "Vial extracto liofilizado: No conservar a temperatura superior a 25ºC. Vial extracto reconstituido: Conservar en nevera (entre 2ºC y 8ºC)."
    },
    presentation: {
      inicio: {
        vialsDesc: "Se suministran en viales liofilizados para ser reconstituidos con 1,2 mL de diluyente.\nTratamiento de iniciación: \nEl envase contiene 8 viales de sustancia activa (1-2-2-3-3-3-3-3-) y 9 viales de diluyente.",
        table: [
          { label: "Verde", labelColor: "green", vial: "Vial nº 1", venom: "", recomposition: "1,2 ml", concentration: "1 mcg/ml" },
          { label: "Amarilla", labelColor: "yellow", vial: "Vial nº 2", venom: "", recomposition: "1,2 ml", concentration: "10 mcg/ml" },
          { label: "Roja", labelColor: "red", vial: "Vial nº 3", venom: "", recomposition: "1,2 ml", concentration: "100 mcg/ml" }
        ]
      },
      continuacion: {
        vialsDesc: "Tratamiento de continuación: \nEl envase contiene 4 viales nº 3 de sustancia activa y 5 viales de diluyente.",
        table: [
          { label: "Roja", labelColor: "red", vial: "Vial nº 3", venom: "", recomposition: "1,2 ml", concentration: "100 mcg/ml" }
        ]
      }
    },
    dosage: {
      conventional: {
        initiation: [
          { vial: "Verde (1)", volume: "0,1 ml", interval: "Día 1" },
          { vial: "Amarillo (2)", volume: "0,1 ml", interval: "Día 8" },
          { vial: "Amarillo (2)", volume: "0,5 ml", interval: "Día 15" },
          { vial: "Rojo (3)", volume: "0,1 ml", interval: "Día 22" },
          { vial: "Rojo (3)", volume: "0,2 ml", interval: "Día 29" },
          { vial: "Rojo (3)", volume: "0,3 ml", interval: "Día 36" },
          { vial: "Rojo (3)", volume: "0,4 ml", interval: "Día 43" },
          { vial: "Rojo (3)", volume: "0,5 ml", interval: "Día 50" },
          { vial: "Rojo (3)", volume: "0,6 ml", interval: "Día 57" },
          { vial: "Rojo (3)", volume: "0,8 ml", interval: "Día 64" },
          { vial: "Rojo (3)", volume: "1 ml", interval: "Día 71" }
        ],
        maintenance: []
      },
      cluster: {
        initiation: [
          { vial: "Amarillo (2)", volume: "0,5 ml", interval: "Día 1" },
          { vial: "Rojo (3)", volume: "0,1 ml", interval: "Día 1" },
          { vial: "Rojo (3)", volume: "0,2 ml", interval: "Día 8" },
          { vial: "Rojo (3)", volume: "0,3 ml", interval: "Día 8" },
          { vial: "Rojo (3)", volume: "0,5", interval: "Día 15" },
          { vial: "Rojo (3)", volume: "0,5", interval: "Día 15" },
          { vial: "Rojo (3)", volume: "1", interval: "Día 22" }
        ],
        maintenance: []
      },
      alternative: {
        initiation: [
          { vial: "Rojo (3)", volume: "0,1 ml", interval: "Día 1" },
          { vial: "Rojo (3)", volume: "0,2 ml", interval: "Día 1" },
          { vial: "Rojo (3)", volume: "0,3 ml", interval: "Día 1" },
          { vial: "Rojo (3)", volume: "0,4 ml", interval: "Día 1" },
          { vial: "Rojo (3)", volume: "0.5 ml", interval: "Día 8" },
          { vial: "Rojo (3)", volume: "0.5 ml", interval: "Día 8" }
        ],
        maintenance: [
          { vial: "Rojo (3)", volume: "1 ml", interval: "Mensual" }
        ]
      }
    },
    packageDuration: {
      initiation: "Tratamiento de Iniciación (1-2-2-3-3-3-3-3): 3.25 meses (97 días)",
      continuation: "Tratamiento de Mantenimiento (3-3-3-3-3): 5 meses (150 días)"
    }
  },
  {
    id: 39,
    name: "DIATER VENOM APIS",
    manufacturer: "DIATER",
    characteristics: "Tratamiento de inmunoterapia individualizado, constituido por un extracto alergénico estéril de veneno de abeja (especie Apis mellifera) junto con el diluyente de reconstitución (solución salina fisiológica con fenol). Se prepara de forma individualizada para cada paciente. Condiciones de Conservación:  Vial extracto liofilizado: No conservar a temperatura superior a 25º C. Vial extracto reconstituido: Conservar en nevera (entre 2ºC y 8ºC). Vial 2: 1 día y Vial 3: 10 días",
    composition: {
      galenic: ["Sustancia activa: Solución terapéutica estéril del extracto alergénico de veneno de abeja (especie Apis mellifera).", "Excipientes: Fenol, cloruro sódico y agua para inyección."],
      allergenic: {
        allergens: ["Apis mellifera: 100 mcg/ml"],
        standardization: "La actividad biológica de DiatVenom Apis, corresponde a la actividad del alérgeno (Apis mellifera) y su potencia se expresa en concentración de proteína total en p/v (mcg veneno/ml de diluyente), siendo esta 100 mcg/ml."
      }
    },
    indications: "Tratamiento de la hipersensibilidad mediada por IgE en pacientes diagnosticados de alergia a veneno de Apis mellifera.",
    adminRoute: "Subcutánea",
    distribution: ["España", "Italia", "Portugal"],
    storage: {
      conditions: "Vial extracto liofilizado: No conservar a temperatura superior a 25º C. Vial extracto reconstituido: Conservar en nevera (entre 2ºC y 8ºC). Vial 2: 1 día y Vial 3: 10 días"
    },
    presentation: {
      inicio: {
        vialsDesc: " Envase que contiene 6 viales de sustancia activa (2-2-3-3-3-3) y 6 viales de diluyente.",
        table: [
          { label: "Amarilla", labelColor: "yellow", vial: "VIAL 2", venom: "12 mcg", recomposition: "1.8 ml", concentration: "10 mcg/mL" },
          { label: "Roja", labelColor: "red", vial: "VIAL 3", venom: "120 mcg", recomposition: "1.8 ml", concentration: "100 mcg/mL" }
        ]
      },
      continuacion: {
        vialsDesc: "Envase que contiene 6 viales 3 de sustancia activa y máxima concentración y 6 viales de diluyente.",
        table: [
          { label: "Roja", labelColor: "red", vial: "VIAL 3", venom: "120 mcg", recomposition: "1.8 ml", concentration: "100 mcg/mL" }
        ]
      }
    },
    dosage: {
      conventional: {
        initiation: [
          { vial: "2 (Amarilla)", volume: "0,1", interval: "Día 1" },
          { vial: "2 (Amarilla)", volume: "0,5", interval: "Día 8" },
          { vial: "3 (Roja)", volume: "0,1", interval: "Día 15" },
          { vial: "3 (Roja)", volume: "0,2", interval: "Día 22" },
          { vial: "3 (Roja)", volume: "0,4", interval: "Día 29" },
          { vial: "3 (Roja)", volume: "0,6", interval: "Día 36" },
          { vial: "3 (Roja)", volume: "0,8", interval: "Día 43" },
          { vial: "3 (Roja)", volume: "1", interval: "Día 50" }
        ],
        maintenance: []
      },
      cluster: {
        initiation: [
          { vial: "2 (Amarilla)", volume: "0,5", interval: "Día 1" },
          { vial: "3 (Roja)", volume: "0,1", interval: "Día 1" },
          { vial: "3 (Roja)", volume: "0,2", interval: "Día 1" },
          { vial: "3 (Roja)", volume: "0,2", interval: "Día 1" },
          { vial: "3 (Roja)", volume: "0,5", interval: "Día 8" },
          { vial: "3 (Roja)", volume: "0,5", interval: "Día 8" },
          { vial: "3 (Roja)", volume: "1", interval: "Día 22" },
          { vial: "3 (Roja)", volume: "1", interval: "Día 52" }
        ],
        maintenance: []
      },
      alternative: {
        initiation: [
          { vial: "2 (Amarilla)", volume: "0,5", interval: "Día 1" },
          { vial: "3 (Roja)", volume: "0,1", interval: "Día 1" },
          { vial: "3 (Roja)", volume: "0,2", interval: "Día 8" },
          { vial: "3 (Roja)", volume: "0,3", interval: "Día 8" },
          { vial: "3 (Roja)", volume: "0,5", interval: "Día 15" },
          { vial: "3 (Roja)", volume: "0,5", interval: "Día 15" },
          { vial: "3 (Roja)", volume: "1", interval: "Día 29" },
          { vial: "3 (Roja)", volume: "1", interval: "Día 59" }
        ],
        maintenance: [
          { vial: "3 (Roja)", volume: "1", interval: "Mensual" }
        ]
      }
    },
    packageDuration: {
      initiation: "2 meses",
      continuation: "6 meses"
    }
  },
  {
    id: 40,
    name: "DIATER VENOM VESPULA",
    manufacturer: "DIATER",
    characteristics: "Tratamiento de inmunoterapia individualizado, constituido por un extracto alergénico estéril de veneno de avispa (especie Vespula spp) junto con el diluyente de reconstitución (solución salina fisiológica con fenol). Se prepara de forma individualizada para cada paciente.",
    composition: {
      galenic: ["Sustancia activa: Solución terapéutica estéril del extracto alergénico de veneno de avispa (especie Vespula spp).", "Excipientes: Vial con polvo liofilizado: manitol. Diluyente de reconstitución: fenol, cloruro sódico y agua para inyectables."],
      allergenic: {
        allergens: ["Vespula spp: 100 mcg/ml"],
        standardization: "La actividad biológica de DiatVenom Vespula corresponde a la actividad del alérgeno (Vespula spp) y su potencia se expresa en concentración de proteína total en p/v (mcg veneno/ml de diluyente), siendo esta 100 mcg/ml."
      }
    },
    indications: "Reacciones sistémicas por hipersensibilidad IgE mediada a veneno de Vespula",
    adminRoute: "Subcutánea",
    distribution: ["España", "Portugal"],
    storage: {
      conditions: ""
    },
    presentation: {
      inicio: {
        vialsDesc: "Principio activo: Vespula spp VIAL Nº de viales Cantidad de sustancia activa: proteina liofilizada de veneno de Vespula ETIQUETA 2 2 viales 12 mcg Amarilla 3 4 viales 120 mcg Roja Disolvente de reconstitución Etiqueta gris 6 viales 1.8 ml Tras la reconstitución con 1,2 ml de disolvente la concentración de los viales es de 10 y 100 microgramos de proteína por ml, respectivamente. ",
        table: [
          { label: "Amarilla", labelColor: "yellow", vial: "VIAL 2", venom: "12 mcg", recomposition: "1.8 ml", concentration: "10 mcg/ml" },
          { label: "Roja", labelColor: "red", vial: "VIAL 3", venom: "120 mcg", recomposition: "1.8 ml", concentration: "100 mcg/ml" }
        ]
      },
      continuacion: {
        vialsDesc: "VIAL Nº de viales Cantidad sustancia activa: proteina liofilizada de veneno de Vespula ETIQUETA 3 6 viales 120 mcg Roja Disolvente de reconstitución Etiqueta gris 6 viales 1.8 ml Tras la reconstitución con 1,2 ml de disolvente la concentración de los viales es de 100 microgramos de proteína por ml Se incluyen jeringuillas de 5 ml para la reconstitución y de 1 ml de un solo uso para la administración  Cada vial de DiatVenom Vespula debe ser reconstituido antes de su administración.",
        table: [
          { label: "Roja", labelColor: "red", vial: "VIAL 3", venom: "120 mcg", recomposition: "1.8 ml", concentration: "100 mcg/ml" }
        ]
      }
    },
    dosage: {
      conventional: {
        initiation: [
          { vial: "2 (Amarilla)", volume: "0,1", interval: "Día 1" },
          { vial: "2 (Amarilla)", volume: "0,5", interval: "Día 8" },
          { vial: "3 (Roja)", volume: "0,1", interval: "Día 15" },
          { vial: "3 (Roja)", volume: "0,2", interval: "Día 22" },
          { vial: "3 (Roja)", volume: "0,4", interval: "Día 29" },
          { vial: "3 (Roja)", volume: "0,6", interval: "Día 36" },
          { vial: "3 (Roja)", volume: "0,8", interval: "Día 43" },
          { vial: "3 (Roja)", volume: "1", interval: "Día 50" }
        ],
        maintenance: []
      },
      cluster: {
        initiation: [
          { vial: "2 (Amarilla)", volume: "0,5*", interval: "Día 1" },
          { vial: "3 (Roja)", volume: "0,1*", interval: "Día 1" },
          { vial: "3 (Roja)", volume: "0,2*", interval: "Día 8" },
          { vial: "3 (Roja)", volume: "0,3*", interval: "Día 8" },
          { vial: "3 (Roja)", volume: "0,5*", interval: "Día 15" },
          { vial: "3 (Roja)", volume: "0,5*", interval: "Día 15" },
          { vial: "3 (Roja)", volume: "1", interval: "Día 22" },
          { vial: "3 (Roja)", volume: "1", interval: "Día 52" }
        ],
        maintenance: []
      },
      alternative: {
        initiation: [
          { vial: "2 (Amarilla)", volume: "0,5*", interval: "Día 1" },
          { vial: "3 (Roja)", volume: "0,1*", interval: "Día 1" },
          { vial: "3 (Roja)", volume: "0,2*", interval: "Día 1" },
          { vial: "3 (Roja)", volume: "0,2*", interval: "Día 1" },
          { vial: "3 (Roja)", volume: "0,5*", interval: "Día 8" },
          { vial: "3 (Roja)", volume: "0,5*", interval: "Día 8" }
        ],
        maintenance: [
          { vial: "3 (Roja)", volume: "1", interval: "Mensual" }
        ]
      }
    },
    packageDuration: {
      initiation: "Tratamiento de Inicio: 2 meses",
      continuation: "Tratamiento de Continuación: 6 meses"
    }
  },
  {
    id: 41,
    name: "EPI Extracto polimerizado",
    manufacturer: "STALLERGENES IBERICA",
    characteristics: "Suspensión de extractos alergénicos purificados, estandarizados biológicamente y polimerizados con glutaraldehído, con fenol al 0.2%. Conservar entre 2-8ºC. No congelar.",
    composition: {
      galenic: ["Atendiendo a la formulación realizada por el especialista, pero siempre en función de las fórmulas específicamente facilitadas por el laboratorio. Incluye glutaraldehido y fenol."],
      allergenic: {
        allergens: [
          { group: "ÁCAROS", name: "Dermatophagoides pteronyssinus", concentration: "0,3 HEP/ml" },
          { group: "ÁCAROS", name: "Dermatophagoides farinae", concentration: "0,3 HEP/ml" },
          { group: "ÁCAROS", name: "Lepidoglyphus destructor", concentration: "0,6 HEP/ml" },
          { group: "ÁCAROS", name: "Blomia tropicalis", concentration: "0,1 HEP/ml" },
          { group: "PÓLENES GRAMÍNEAS", name: "Grupo Gramíneas ( Cynodon, Dactylis, Lolium, Phleum, Secale)", concentration: "0,3 HEP/ml" },
          { group: "PÓLENES MALEZAS", name: "Artemisa vulgaris", concentration: "0,6 HEP/ml" },
          { group: "PÓLENES MALEZAS", name: "Chenopodium album", concentration: "0,15 HEP/ml" },
          { group: "PÓLENES MALEZAS", name: "Parietaria judaica", concentration: "0,2 HEP/ml" },
          { group: "PÓLENES MALEZAS", name: "Plantago lanceolata", concentration: "0,6 HEP/ml" },
          { group: "PÓLENES MALEZAS", name: "Salsola kali", concentration: "0,06 HEP/ml" },
          { group: "PÓLENES ÁRBOLES", name: "Cupressus arizonica", concentration: "1 HEP/ml" },
          { group: "PÓLENES ÁRBOLES", name: "Olea europaea", concentration: "0,77 HEP/ml" },
          { group: "PÓLENES ÁRBOLES", name: "Platanus acerifolia", concentration: "1 HEP/ml" }
        ],
        standardization: "La valoración biológica del extracto se realiza en HEP/ml (HEP:Histamine Equivalent in Prick). La potencia biológica expresada en HEP/ml es distinta para cada alérgeno."
      }
    },
    indications: "Rinitis, conjuntivitis o asma por hipersensibilidad IgE mediada a alérgenos inhalados.",
    adminRoute: "Inyectable por vía subcutánea.",
    distribution: ["Argentina", "Brasil", "España", "México", "Portugal"],
    storage: {
      conditions: "Conservar entre 2-8ºC. No congelar."
    },
    presentation: {
      inicio: {
        vialsDesc: "Tratamiento de iniciación: Vial nº 2 y Vial nº 3.",
        table: [
          { label: "Amarilla", labelColor: "yellow", vial: "Vial nº 2", venom: "", recomposition: "1.5 mL", concentration: "1:10 vial 3" },
          { label: "Roja", labelColor: "red", vial: "Vial nº 3", venom: "", recomposition: "2.5 mL", concentration: "C. máxima" }
        ]
      },
      continuacion: {
        vialsDesc: "Tratamiento de mantenimiento: 1 ó 2 viales nº 3.",
        table: []
      }
    },
    dosage: {
      conventional: {
        initiation: [
          { vial: "Amarilla 2", volume: "0.5 ml", interval: "Día 0" },
          { vial: "Roja 3", volume: "0.2 ml + 0.3 ml", interval: "Día 7 (intervalo 30 min.)" },
          { vial: "Roja 3", volume: "0.5 ml", interval: "Día 14" }
        ],
        maintenance: [
          { vial: "Roja 3", volume: "0.5 ml", interval: "mensual o quincenal" }
        ]
      },
      cluster: {
        initiation: [],
        maintenance: []
      },
      alternative: {
        initiation: [],
        maintenance: []
      }
    },
    packageDuration: {
      initiation: "4 meses",
      continuation: "5 meses (1 vial) o 10 meses (2 viales)"
    },
  },
  {
    id: 42,
    name: "ITAI DEPOT",
    manufacturer: "ITAI PHARMA",
    characteristics: "Tratamiento de inmunoterapia individualizado, constituido por extractos alergénicos a los que está sensibilizado el paciente, de administración subcutánea. Se prepara de forma individualizada para cada paciente de acuerdo con la composición determinada en la prescripción médica. Conservar en nevera (entre 2ºC y 8ºC). No congelar",
    composition: {
      galenic: ["Sustancia activa: Extractos alergénicos a los que está sensibilizado el paciente, preparados de forma individualizada en base a la solicitud del especialista.", "Excipientes: Hidróxido de aluminio, fenol, cloruro sódico y agua para inyectables."],
      allergenic: {
        allergens: [
          { group: "ÁCAROS", name: "Blomia tropicalis", concentration: "0,1 HEP/ml" },
          { group: "ÁCAROS", name: "D. pteronyssinus", concentration: "0,3 HEP/ml" },
          { group: "ÁCAROS", name: "D. farinae", concentration: "0,3 HEP/ml" },
          { group: "ÁCAROS", name: "Lepidoglyphus destructor", concentration: "0,6 HEP/ml" },
          { group: "ÁCAROS", name: "Tyrophagus putrescentiae", concentration: "0,05 HEP/ml" },
          { group: "PÓLENES GRAMÍNEAS", name: "Gramíneas salvajes(1)", concentration: "0,3 HEP/ml" },
          { group: "PÓLENES GRAMÍNEAS", name: "Cynodon dactylon", concentration: "0,35 HEP/ml" },
          { group: "PÓLENES GRAMÍNEAS", name: "Dactylis glomerata", concentration: "0,3 HEP/ml" },
          { group: "PÓLENES GRAMÍNEAS", name: "Lolium perenne", concentration: "0,3 HEP/ml" },
          { group: "PÓLENES GRAMÍNEAS", name: "Phleum pratense", concentration: "0,3 HEP/ml" },
          { group: "PÓLENES GRAMÍNEAS", name: "Phragmites communis", concentration: "0,2 HEP/ml" },
          { group: "PÓLENES GRAMÍNEAS", name: "Poa pratensis", concentration: "0,3 HEP/ml" },
          { group: "PÓLENES MALEZAS", name: "Artemisia vulgaris", concentration: "0,6 HEP/ml" },
          { group: "PÓLENES MALEZAS", name: "Chenopodium album", concentration: "0,15 HEP/ml" },
          { group: "PÓLENES MALEZAS", name: "Parietaria judaica", concentration: "0,2 HEP/ml" },
          { group: "PÓLENES MALEZAS", name: "Plantago lanceolata", concentration: "0,6 HEP/ml" },
          { group: "PÓLENES MALEZAS", name: "Salsola kali", concentration: "0,06 HEP/ml" },
          { group: "PÓLENES ÁRBOLES", name: "Cupressaceae spp(2)", concentration: "0,77 HEP/ml" },
          { group: "PÓLENES ÁRBOLES", name: "Olea europaea", concentration: "0,77 HEP/ml" },
          { group: "PÓLENES ÁRBOLES", name: "Platanus acerifolia", concentration: "0,68 HEP/ml" },
          { group: "EPITELIOS", name: "Caspa de gato", concentration: "0,33 HEP/ml" },
          { group: "EPITELIOS", name: "Caspa de perro", concentration: "0,33 HEP/ml" },
          { group: "HONGOS", name: "Alternaria alternata", concentration: "0,07 HEP/ml" }
        ],
        standardization: "La actividad biológica de los alérgenos estandarizados biológicamente se calcula de acuerdo con las \"Nordic Guidelines\" mediante pruebas \"in vivo\": pruebas cutáneas en prick test realizadas a unos 30 pacientes alérgicos con una clínica clara de rinitis o asma alérgica con empeoramiento de los síntomas durante la exposición al alérgeno, seleccionados de acuerdo con la normativa de la EAACI. A dichos pacientes se les realiza prick test a 4 diluciones por duplicado del extracto a estandarizar, junto con un control positivo y un control negativo. De esta forma, se determina el valor HEP, que se define como la concentración del extracto que produce en el paciente medio un área de la pápula igual a la histamina a 10 mg/ml."
      }
    },
    indications: "Rinitis, conjuntivitis o asma por hipersensibilidad IgE mediada a alérgenos inhalados.",
    adminRoute: "Subcutánea",
    distribution: ["España"],
    storage: {
      conditions: "Conservar en nevera (entre 2ºC y 8ºC). No congelar."
    },
    presentation: {
      inicio: {
        vialsDesc: "Se suministran en viales con la solución del extracto alergénico etiquetados por números y colores.\nTratamiento de iniciación\nExiste un tratamiento de iniciación con los viales 2, 3, 3",
        table: [
          { label: "Verde", labelColor: "green", vial: "Vial nº 1", venom: "", recomposition: "3,6 ml", concentration: "1/100" },
          { label: "Amarilla", labelColor: "yellow", vial: "Vial nº 2", venom: "", recomposition: "3,6 ml", concentration: "1/10" },
          { label: "Roja", labelColor: "red", vial: "Vial nº 3", venom: "", recomposition: "4,5 ml", concentration: "1/1" }
        ]
      },
      continuacion: {
        vialsDesc: "El envase puede contener 1 o 2 viales número 3.",
        table: [
          { label: "Roja", labelColor: "red", vial: "Vial nº 3", venom: "", recomposition: "4,5 ml", concentration: "1/1" }
        ]
      }
    },
    dosage: {
      conventional: {
        initiation: [
          { vial: "Verde 1", volume: "0,1 ml", interval: "1 semana" },
          { vial: "Verde 1", volume: "0,2 ml", interval: "1 semana" },
          { vial: "Verde 1", volume: "0,4 ml", interval: "1 semana" },
          { vial: "Verde 1", volume: "0,8 ml", interval: "1 semana" },
          { vial: "Amarilla 2", volume: "0,1 ml", interval: "1 semana" },
          { vial: "Amarilla 2", volume: "0,2 ml", interval: "1 semana" },
          { vial: "Amarilla 2", volume: "0,4 ml", interval: "1 semana" },
          { vial: "Amarilla 2", volume: "0,8 ml", interval: "1 semana" },
          { vial: "Roja 3", volume: "0,1 ml", interval: "1 semana" },
          { vial: "Roja 3", volume: "0,2 ml", interval: "1 semana" },
          { vial: "Roja 3", volume: "0,4 ml", interval: "1 semana" },
          { vial: "Roja 3", volume: "0,6 ml", interval: "1 semana" },
          { vial: "Roja 3", volume: "0,8 ml", interval: "1 semana" }
        ],
        maintenance: [
          { vial: "Roja 3", volume: "0,8 ml", interval: "Mensual" }
        ]
      },
      cluster: {
        initiation: [
          { vial: "Roja 3", volume: "0,1 ml + 0,2 ml", interval: "1er día (cada 30-45 min)" },
          { vial: "Roja 3", volume: "0,4 ml + 0, 4 ml", interval: "1 semana (cada 30-45 min)" },
          { vial: "Roja 3", volume: "0,8 ml", interval: "1 semana" }
        ],
        maintenance: [
          { vial: "Roja 3", volume: "0,8 ml", interval: "Mensual" }
        ]
      },
      alternative: {
        initiation: [],
        maintenance: []
      }
    },
    packageDuration: {
      initiation: "Iniciación 1-2-3: 5 meses\nIniciación 2-3: 4 meses\nIniciación 2-3-3: 9 meses",
      continuation: "Mantenimiento 3: 5 meses \nMantenimiento 3-3: 10 meses"
    }
  },
  {
    id: 43,
    name: "ITAI POLIMERIZADO",
    manufacturer: "ITAI PHARMA",
    characteristics: "Tratamiento de inmunoterapia individualizado, constituido por extractos alergénicos polimerizados con glutaraldehído, a los que está sensibilizado el paciente. Se prepara de forma individualizada para cada paciente de acuerdo con la composición determinada en la prescripción médica. Conservar en nevera (entre 2ºC y 8ºC). No congelar",
    composition: {
      galenic: ["Sustancia activa: Solución terapéutica de extractos alergénicos a los que está sensibilizado el paciente, preparada de forma individualizada en base a la solicitud del especialista.", "Excipientes: Cloruro sódico, fenol, fosfato monopotásico, fosfato disódico y agua para inyectables."],
      allergenic: {
        allergens: [
          { name: "Blomia tropicalis", concentration: "0,1 HEP/ml" },
          { name: "D. farinae", concentration: "0,3 HEP/ml" },
          { name: "D. pteronyssinus", concentration: "0,3 HEP/ml" },
          { name: "Lepidoglyphus", concentration: "0,6 HEP/ml" },
          { name: "Gramíneas salvajes(1)", concentration: "0,3 HEP/ml" },
          { name: "Cynodon dactylon", concentration: "0,35 HEP/ml" },
          { name: "Lolium perenne", concentration: "0,3 HEP/ml" },
          { name: "Artemisia vulgaris", concentration: "0,6 HEP/ml" },
          { name: "Chenopodium album", concentration: "0,15 HEP/ml" },
          { name: "Parietaria judaica", concentration: "0,2 HEP/ml" },
          { name: "Plantago lanceolata", concentration: "0,6 HEP/ml" },
          { name: "Salsola kali", concentration: "0,06 HEP/ml" },
          { name: "Cupressaceae spp(2)", concentration: "0,77 HEP/ml" },
          { name: "Olea europaea", concentration: "0,77 HEP/ml" },
          { name: "Platanus acerifolia", concentration: "0,68 HEP/ml" }
        ],
        standardization: "La actividad biológica de los alérgenos estandarizados biológicamente se calcula de acuerdo con las \"Nordic Guidelines\" mediante pruebas \"in vivo\": pruebas cutáneas en prick test realizadas a unos 30 pacientes alérgicos con una clínica clara de rinitis o asma alérgica con empeoramiento de los síntomas durante la exposición al alérgeno, seleccionados de acuerdo con la normativa de la EAACI. A dichos pacientes se les realiza prick test a 4 diluciones por duplicado del extracto a estandarizar, junto con un control positivo y un control negativo. De esta forma, se determina el valor HEP, que se define como la concentración del extracto que produce en el paciente medio un área de la pápula igual a la histamina a 10 mg/ml."
      }
    },
    indications: "Rinitis, conjuntivitis o asma por hipersensibilidad IgE mediada a alérgenos inhalados.",
    adminRoute: "Subcutánea",
    distribution: ["España"],
    storage: {
      conditions: "Conservar en nevera (entre 2ºC y 8ºC). No congelar."
    },
    presentation: {
      inicio: {
        vialsDesc: "Se suministran en viales con la solución del extracto alergénico etiquetados por números y colores.\nTratamiento de Iniciación",
        table: [
          { label: "Verde", labelColor: "green", vial: "Vial nº 1", venom: "", recomposition: "3 ml", concentration: "1/100" },
          { label: "Amarilla", labelColor: "yellow", vial: "Vial nº 2", venom: "", recomposition: "3 ml", concentration: "1/10" },
          { label: "Roja", labelColor: "red", vial: "Vial nº 3", venom: "", recomposition: "3 ml", concentration: "1/1" }
        ]
      },
      continuacion: {
        vialsDesc: "El envase puede contener 1 o 2 viales número 3.",
        table: [
          { label: "Roja", labelColor: "red", vial: "Vial nº 3", venom: "", recomposition: "3 ml", concentration: "1/1" }
        ]
      }
    },
    dosage: {
      conventional: {
        initiation: [
          { vial: "1 (Verde)", volume: "0,5 ml", interval: "Día 1" },
          { vial: "2 (Amarilla)", volume: "0,5 ml", interval: "1 semana" },
          { vial: "3 (Roja)", volume: "0,5 ml", interval: "1 semana" }
        ],
        maintenance: [
          { vial: "3 (Roja)", volume: "0,5 ml", interval: "1 mes" }
        ]
      },
      cluster: {
        initiation: [
          { vial: "3 (Roja)", volume: "0,2 ml + 0,3 ml*", interval: "30-45 minutos*" }
        ],
        maintenance: [
          { vial: "3 (Roja)", volume: "0,5 ml", interval: "1 mes" }
        ]
      },
      alternative: {
        initiation: [],
        maintenance: []
      }
    },
    packageDuration: {
      initiation: "Viales 1-2-3: 6 meses\nVial 3: 6 meses \nViales 3-3: 12 meses ",
      continuation: "1 vial 3: 6 meses \n2 viales 3: 12 meses"
    }
  },
  {
    id: 44,
    name: "ITAI POLIMERIZADO PLUS",
    manufacturer: "ITAI PHARMA",
    characteristics: "Tratamiento de inmunoterapia individualizado, constituido por extractos alergénicos polimerizados con glutaraldehído a los que está sensibilizado el paciente, de administración subcutánea, para el tratamiento de enfermedades alérgicas. Se prepara de forma individualizada para cada paciente de acuerdo con la composición determinada en la prescripción médica, y está constituido por la mezcla de 2 o 3 alérgenos a máxima concentración, concentración óptima terapéutica. Condiciones de conservación: conservar en nevera (entre 2ºC y 8ºC). No congelar.",
    composition: {
      galenic: ["Sustancia activa: Solución terapéutica de 2 o 3 extractos alergénicos a máxima concentración, a los que está sensibilizado el paciente, preparada de forma individualizada en base a la solicitud del especialista.", "Excipientes: Cloruro sódico, fenol, fosfato monopotásico, fosfato disódico y agua para inyectables."],
      allergenic: {
        allergens: [
          { name: "Blomia tropicalis", concentration: "0,1 HEP/ml" },
          { name: "D. farinae", concentration: "0,3 HEP/ml" },
          { name: "D. pteronyssinus", concentration: "0,3 HEP/ml" },
          { name: "Lepidoglyphus", concentration: "0,6 HEP/ml" },
          { name: "Gramíneas salvajes(1)", concentration: "0,3 HEP/ml" },
          { name: "Artemisia vulgaris", concentration: "0,6 HEP/ml" },
          { name: "Chenopodium album", concentration: "0,15 HEP/ml" },
          { name: "Parietaria judaica", concentration: "0,2 HEP/ml" },
          { name: "Plantago lanceolata", concentration: "0,6 HEP/ml" },
          { name: "Salsola kali", concentration: "0,06 HEP/ml" },
          { name: "Cupressaceae spp(2)", concentration: "0,77 HEP/ml" },
          { name: "Olea europaea", concentration: "0,77 HEP/ml" },
          { name: "Platanus acerifolia", concentration: "0,68 HEP/ml" }
        ],
        standardization: "La actividad biológica de los alérgenos que están estandarizados biológicamente se calcula de acuerdo con las \"Nordic Guidelines\" mediante pruebas \"in vivo\": pruebas cutáneas skin prick test realizadas en alrededor de 30 pacientes alérgicos con una clínica clara de rinitis o asma alérgica y que presentan empeoramiento de los síntomas durante la exposición al alérgeno, seleccionados de acuerdo con la normativa de la EAACI. A dichos pacientes se les realiza skin prick test a 4 diluciones por duplicado del extracto a estandarizar, junto con un control positivo y un control negativo. De esta forma, se determina el valor HEPD, que se define como la concentración del extracto que produce en el paciente medio un área de la pápula igual a la histamina a 10 mg/ml."
      }
    },
    indications: "Rinitis, conjuntivitis o asma por hipersensibilidad IgE mediada a alérgenos inhalados.",
    adminRoute: "Subcutánea",
    distribution: ["España"],
    storage: {
      conditions: "Conservar en nevera (entre 2ºC y 8ºC). No congelar."
    },
    presentation: {
      inicio: {
        vialsDesc: "Se suministran en viales con la solución del extracto alergénico a diferentes concentraciones etiquetados por números y colores.\nTratamiento de Iniciación\nLa presentación de iniciación de ITAI POLIMERIZADO PLUS puede estar constituido por: envases 1-2-3, 2 viales número 3 (3-3) o un vial nº3 (3)",
        table: [
          { label: "Verde", labelColor: "green", vial: "VIAL 1", venom: "", recomposition: "3 ml", concentration: "1/100" },
          { label: "Amarilla", labelColor: "yellow", vial: "VIAL 2", venom: "", recomposition: "3 ml", concentration: "1/10" },
          { label: "Roja", labelColor: "red", vial: "VIAL 3", venom: "", recomposition: "3 ml", concentration: "1/1" }
        ]
      },
      continuacion: {
        vialsDesc: "El envase puede contener 1 o 2 viales número 3 a la concentración máxima terapéutica.",
        table: [
          { label: "Roja", labelColor: "red", vial: "VIAL 3", venom: "", recomposition: "3 ml", concentration: "1/1" }
        ]
      }
    },
    dosage: {
      conventional: {
        initiation: [
          { vial: "3", volume: "0,2 ml", interval: "Día 1" },
          { vial: "3", volume: "0,5 ml", interval: "1 semana" },
          { vial: "3", volume: "0,5 ml", interval: "1 mes" }
        ],
        maintenance: [
          { vial: "3", volume: "0,5 ml", interval: "1 mes" }
        ]
      },
      cluster: {
        initiation: [
          { vial: "3", volume: "0,2 ml + 0,3 ml*", interval: "30-45 minutos*" }
        ],
        maintenance: [
          { vial: "3", volume: "0,5 ml", interval: "1 mes" }
        ]
      },
      alternative: {
        initiation: [
          { vial: "1", volume: "0,5 ml", interval: "Día 1" },
          { vial: "2", volume: "0,5 ml", interval: "1 semana" },
          { vial: "3", volume: "0,5 ml", interval: "1 semana" }
        ],
        maintenance: [
          { vial: "3", volume: "0,5 ml", interval: "1 mes" }
        ]
      }
    },
    packageDuration: {
      initiation: "Viales 1-2-3: 6 meses\nVial 3: 6 meses \nViales 3-3: 12 meses ",
      continuation: "1 vial 3: 6 meses \n2 viales 3: 12 meses"
    }
  },
  {
    id: 45,
    name: "LAIS IN",
    manufacturer: "LOFARMA IBERICA",
    characteristics: "Extracto alergénico modificado químicamente según formulación individualizada para administración subcutánea",
    composition: {
      galenic: ["Principio activo: Extracto alergénico modificado químicamente según formulación individualizada", "Excipientes: Cloruro de sodio (7,8 mg/ml), fenol (4 mg/ml), fosfato de calcio (hasta 1,3 mg/ml), agua para inyección (hasta 1 ml)."],
      allergenic: {
        allergens: [
          { group: "ACAROS", name: "D. pteronyssinus + D. farinae", concentration: "10 BU/mL" },
          { group: "PÓLENES", name: "Phleum pratense + Poa pratensis + Holcus lanatus", concentration: "10 BU/mL" },
          { group: "PÓLENES", name: "P. judaica + P. officinalis", concentration: "10 BU/mL" },
          { group: "PÓLENES", name: "Olea europaea", concentration: "10 BU/mL" },
          { group: "PÓLENES", name: "Gramíneas* + Olea europaea", concentration: "10 BU/mL" }
        ],
        standardization: "La unidad biológica de medida de la inmunoterapia subcutánea es la BU/mL, estandarizada en base al test cutáneo en pacientes sensibilizados. La potencia alergénica se mantiene constante mediante técnica de EAST-inhibición con respecto al estándar interno (IHRP). Una BU corresponde a 1/100 de la concentración del extracto antes de la modificación química que produce una pápula media equivalente a la histamina 10 mg/mL. La modificación química del alérgeno se realiza por reacción de carbamilación con el grupo NH2 de la lisina y cianato potásico, obteniéndose la homocitrulina, convirtiendo el alérgeno nativo en alergoide monomérico."
      }
    },
    indications: "Rinoconjuntivitis y/o asma bronquial con hipersensibilidad IgE mediada a alérgenos inhalantes",
    adminRoute: "Subcutánea",
    distribution: ["España", "Portugal", "Italia", "Alemania", "Grecia", "Reino Unido", "Hungría"],
    storage: {
      conditions: ""
    },
    presentation: {
      inicio: {
        vialsDesc: "Caja conteniendo 1 ó 2 viales de 3,5 mL cada vial con concentración 10 BU/ml.",
        table: []
      },
      continuacion: {
        vialsDesc: "",
        table: []
      }
    },
    dosage: {
      conventional: {
        initiation: [
          { vial: "10 BU/mL", volume: "0,10", interval: "1" },
          { vial: "10 BU/mL", volume: "0,20", interval: "2" },
          { vial: "10 BU/mL", volume: "0,30", interval: "3" },
          { vial: "10 BU/mL", volume: "0,50", interval: "4" }
        ],
        maintenance: []
      },
      cluster: {
        initiation: [],
        maintenance: []
      },
      alternative: {
        initiation: [],
        maintenance: []
      }
    },
    packageDuration: {
      initiation: "5 meses",
      continuation: "6 meses"
    }
  },
  {
    id: 46,
    name: "MODIGOID",
    manufacturer: "ROXALL",
    characteristics: "Modigoid es un producto liofilizado monodosis de Alt a 1 (alérgeno mayor del hongo Alternaria alternata) o Cup a 1 (alérgeno mayor del polen de Cupressus arizonica), purificado y polimerizado. Se presenta junto con disolvente para reconstitución para obtener una suspensión de Alt a 1 o Cup a 1 polimerizado adsorbido en hidróxido de aluminio para administración subcutánea.",
    composition: {
      galenic: ["Sustancia activa: Producto liofilizado de Alt a 1 (alérgeno mayor del hongo Alternaria alternata) o Cup a 1 (alérgeno mayor del polen de Cupressus arizonica) purificado y polimerizado.", "Excipientes Liofilizado: cloruro de sodio, dihidrógeno fosfato de sodio y manitol.", "Disolvente: hidróxido de aluminio hidratado para adsorción y agua para preparaciones inyectables. Este medicamento contiene menos de 1 mmol de sodio (23 mg) por dosis máxima de 0,5 mL; esto es, esencialmente \"exento de sodio\"."],
      allergenic: {
        allergens: [
          { name: "Alt a 1 polimerizado", concentration: "4 mcg/ml" },
          { name: "Cup a 1 polimerizado", concentration: "12 mcg/ml" }
        ],
        standardization: "Producto estandarizado en contenido de Alt a 1 o Cup a 1 mediante cuantificación de proteína. Cada vial contiene 2,8 mcg de Alt a 1 o 8,4 mcg de Cup a 1 purificado y polimerizado, que tras recomposición con 0,7 mL de diluyente depot da lugar a una concentración de 4 mcg/mL para Alt a 1 y 12 mcg/ml para Cup a 1, de modo que la administración de 0,5 mL representa un dosis de 2 mcg para Alt a 1 y 6 mcg para Cup a 1."
      }
    },
    indications: "Rinoconjuntivitis y/o asma bronquial por hipersensibilidad IgE mediada a hongo Alternaria o polen de Cupressus arizonica",
    adminRoute: "Subcutánea",
    distribution: ["España", "Portugal", "Alemania", "Italia"],
    storage: {
      conditions: "Antes de la reconstitución, conservar en nevera (entre 2 °C y 8 °C). No congelar. Los medicamentos congelados no deben ser utilizados. Una vez reconstituido administrar en el día."
    },
    presentation: {
      inicio: {
        vialsDesc: "PRESENTACIÓN ÚNICA: 6 viales monodosis con liofilizado polimerizado de Alt a 1 (2.8 mcg) o Cup a 1 (8.4 mcg) + 6 viales de disolvente (1 ml) Cada vial liofilizado se reconstituye con 0.7 ml de disolvente, con lo que se consigue un concentración de Alt a 1 de 4 mcg/ml y de Cup a 1 de 12 mcg/ml Una vez reconstituido el vial debe administrarse en el día",
        table: []
      },
      continuacion: {
        vialsDesc: "",
        table: []
      }
    },
    dosage: {
      conventional: {
        initiation: [
          { vial: "", volume: "0,1", interval: "1ª DOSIS" },
          { vial: "", volume: "0,3", interval: "DÍA 7" },
          { vial: "", volume: "0,5", interval: "DÍA 14" }
        ],
        maintenance: [
          { vial: "", volume: "0,5", interval: "4-8 semanas" }
        ]
      },
      cluster: {
        initiation: [
          { vial: "", volume: "0,2", interval: "DÍA 1" },
          { vial: "", volume: "0,3", interval: "Administrar con intervalo de 15 minutos" }
        ],
        maintenance: [
          { vial: "", volume: "0,5", interval: "4-8 semanas" }
        ]
      },
      alternative: {
        initiation: [],
        maintenance: []
      }
    },
    packageDuration: {
      initiation: "Inicio cluster: 6 meses Inicio convencional: 3 meses + 3 semanas",
      continuation: "5-10 meses"
    }
  },
  {
    id: 47,
    name: "MODIGOID PLUS",
    manufacturer: "ROXALL",
    characteristics: "Modigoid Plus es un producto liofilizado monodosis de Alt a 1 (alérgeno mayor del hongo Alternaria alternata) o Cup a 1 (alérgeno mayor del polen de Cupressus arizonica), purificado y polimerizado que se pueden mezclar con otros extractos alérgenicos polimerizados (máximo 3)",
    composition: {
      galenic: ["Polvo y disolvente para suspensión inyectable.", "Sustancia activa: Alt a 1, alérgeno mayor del hongo Alternaria alternata,  polimerizado liofilizado.", "Sustancia activa: Cup a 1, alérgeno mayor del polen Cupressus arizonica, polimerizado liofilizado.", "Suspensión estéril de extractos alergénicos polimerizados con glutaraldehído únicos o mezclados en función de la fórmula solicitada por el especialista (hasta 3 extractos como máximo a mezclar con el alergoide molecular Alt a 1 o Cup a 1).", "Excipientes: manitol, cloruro de sodio, fenol, hidróxido de aluminio hidratado, dihidrógeno fosfato de sodio, hidróxido de sodio y agua para preparaciones inyectables"],
      allergenic: {
        allergens: [
          { group: "ÁCAROS", name: "Blomia tropicalis" },
          { group: "ÁCAROS", name: "D. farinae" },
          { group: "ÁCAROS", name: "D. pteronyssinus" },
          { group: "ÁCAROS", name: "D. pteronyssinus + D. farinae" },
          { group: "ÁCAROS", name: "Lepidoglyphus destructor" },
          { group: "PÓLENES GRAMÍNEAS", name: "GRAMÍNEAS SALVAJES" },
          { group: "PÓLENES GRAMÍNEAS", name: "Cynodon dactylon" },
          { group: "PÓLENES GRAMÍNEAS", name: "Dactylis glomerata" },
          { group: "PÓLENES GRAMÍNEAS", name: "Lolium perenne" },
          { group: "PÓLENES GRAMÍNEAS", name: "Phleum pratense" },
          { group: "PÓLENES GRAMÍNEAS", name: "Secale cereale" },
          { group: "PÓLENES MALEZAS", name: "Ambrosia artemisiifolia" },
          { group: "PÓLENES MALEZAS", name: "Artemisia vulgaris" },
          { group: "PÓLENES MALEZAS", name: "Parietaria judaica" },
          { group: "PÓLENES MALEZAS", name: "Plantago lanceolata" },
          { group: "PÓLENES MALEZAS", name: "Salsola kali" },
          { group: "PÓLENES ÁRBOLES", name: "Alnus glutinosa" },
          { group: "PÓLENES ÁRBOLES", name: "Betula verrucosa" },
          { group: "PÓLENES ÁRBOLES", name: "Corylus avellana" },
          { group: "PÓLENES ÁRBOLES", name: "Cupressus arizonica" },
          { group: "PÓLENES ÁRBOLES", name: "Fraxinus excelsior" },
          { group: "PÓLENES ÁRBOLES", name: "Olea europaea" },
          { group: "PÓLENES ÁRBOLES", name: "Platanus acerifolia" },
          { group: "EPITELIOS", name: "Gato" },
          { group: "EPITELIOS", name: "Perro" }
        ],
        standardization: "Producto estandarizado cuyos principios activos son: - En los viales LIOFILIZADOS (se reconstituyen con los viales de suspensión): Alérgenos moleculares altamente purificados y polimerizados (modificados químicamente) del hongo Alternaria alternata o del polen del árbol Cupressus arizonica (alergoides moleculares), estandarizados en cantidad de proteína y conteniendo 4 mcg/mL de Alt a 1 polimerizado o 12 mcg/mL de Cup a 1 polimerizado tras su reconstitución. - En los viales de SUSPENSIÓN: Extractos alergénicos estandarizados en actividad terapéutica basada en actividad biológica, altamente purificados y polimerizados (modificados químicamente) de pólenes, ácaros o epitelios animales adsorbidos en gel de hidróxido de aluminio (alergoides depot), conteniendo 10.000 o 20.000 TU/mL (TU = therapeutic unit), cuya uniformidad de la actividad biológica está garantizada por el proceso de fabricación. Hasta 3 extractos como máximo a mezclar con el alergoide molecular At a 1 o Cup a 1 (uno de los dos)."
      }
    },
    indications: "Rinocojuntivitis y/o asma bronquial por hipersensibilidad IgE mediada",
    adminRoute: "Subcutánea",
    distribution: ["España", "Italia", "Portugal"],
    storage: {
      conditions: "Antes de la reconstitución, conservar en nevera (entre 2 °C y 8 °C). No congelar. Los medicamentos congelados no deben ser utilizados. Una vez reconstituido administrar en el día."
    },
    presentation: {
      inicio: {
        vialsDesc: "PRESENTACIÓN ÚNICA: 6 viales monodosis con etiqueta color magenta con polvo + 6 viales de suspensión de extractos polimerizados con etiqueta de color gris (hasta 3 extractos como máximo a mezclar con el alergoide molecular At a 1 o Cup a 1)",
        table: [
          { label: "MAGENTA", labelColor: "purple", vial: "LIOFILIZADO POLIMERIZADO 2,8 mcg Alt a 1 o 8,4 mcg de Cup a 1", venom: "", recomposition: "CON 0.7 ML DEL VIAL DISOLVENTE", concentration: "4 mcg/mL en Alt a 1 o 12 mcg/mL en Cup a 1" },
          { label: "GRIS", labelColor: "gray", vial: "VIAL DISOLVENTE (1 mL) Extractos polimerizados seleccionados (máximo 3)", venom: "", recomposition: "", concentration: "10.000 TU/mL para cada alérgeno polimerizado que se mezcle con Alt a 1 o Cup a 1 (1 o 2 extractos). Si se mezclan 3 alérgenos polimerizados con Alt a 1 o Cup a 1, la concentración final de cada extracto polimerizado es de 6.667 TU/mL" }
        ]
      },
      continuacion: {
        vialsDesc: "",
        table: []
      }
    },
    dosage: {
      conventional: {
        initiation: [
          { vial: "", volume: "0,1", interval: "1ª DOSIS" },
          { vial: "", volume: "0,3", interval: "DÍA 7" },
          { vial: "", volume: "0,5", interval: "DÍA 14" }
        ],
        maintenance: [
          { vial: "", volume: "0,5", interval: "4-8 semanas" }
        ]
      },
      cluster: {
        initiation: [
          { vial: "", volume: "0,2", interval: "DÍA 1" },
          { vial: "", volume: "0,3", interval: "Administrar con intervalo de 30 minutos" }
        ],
        maintenance: [
          { vial: "", volume: "0,5", interval: "4-8 semanas" }
        ]
      },
      alternative: {
        initiation: [],
        maintenance: []
      }
    },
    packageDuration: {
      initiation: "PAUTA CLUSTER: 6 meses PAUTA CONVENCIONAL: 3 meses + 3 semanas",
      continuation: "5-10 meses"
    }
  },
  {
    id: 48,
    name: "MOLMITE",
    manufacturer: "DIATER",
    characteristics: "Producto de inmunoterapia específica e individualizada que consiste en una mezcla de proteínas purificadas Der p 1/Der p 2 o Der p 1/Der p 2/Der p 23, que son alérgenos mayores del ácaro Dermatophagoides pteronyssinus, correspondientes a los Grupos 1, 2 y 23, respectivamente. Estas mezclas pueden combinarse con las proteínas purificadas de Alt a 1 o Cup a 1.",
    composition: {
      galenic: ["Principio activo: Las proteínas purificadas Der p 1, Der p 2 y Der p 23 son alérgenos mayores del ácaro Dermatophagoides pteronyssinus, correspondientes a los Grupos 1, 2 y 23, respectivamente. La proteína purificada Alt a 1 es un alérgeno mayor del hongo Alternaria alternata. La proteína purificada Cup a 1 es un alérgeno mayor de Cupresssus arizónica, de la familia Cupressaceae.", "Excipientes Grupo 1/Grupo 2 y Grupo 1/Grupo 2/Grupo 23: cloruro sódico, hidróxido de aluminio, fenol, glicerol y agua para inyección.", "Excipientes Grupo 1/Grupo 2/Alt a 1, Grupo 1/Grupo 2/Grupo 23/Alt a 1, Grupo 1/grupo 2/ Cup a 1 y Grupo 1/Grupo 2/Grupo 23/Cup a 1: cloruro sódico, hidróxido de aluminio, glicerol y agua para inyección."],
      allergenic: {
        allergens: [
          { name: "Grupo 1/Grupo 2", concentration: "0.025/0.027 mcg/ml (Vial A), 0.25/0.27 mcg/ml (Vial B)" },
          { name: "Grupo 1/Grupo 2/Grupo 23", concentration: "0.025/0.027/0.005 mcg/ml (Vial A), 0.25/0.27/0.05 mcg/ml (Vial B)" },
          { name: "Grupo 1/Grupo 2/Alt a 1", concentration: "0.25/0.27/0.46 mcg/ml (Vial B)" },
          { name: "Grupo 1/Grupo 2/Grupo 23/Alt a 1", concentration: "0.25/0.27/0.05/0.46 mcg/ml (Vial B)" },
          { name: "Grupo 1/Grupo 2/Cup a 1", concentration: "0.25/0.27/3 mcg/ml (Vial B)" },
          { name: "Grupo 1/Grupo 2/Grupo 23/Cup a 1", concentration: "0.25/0.27/0.05/3 mcg/ml (Vial B)" }
        ],
        standardization: "Combinación de los alérgenos moleculares Der p 1, Der p 2 y Der p 23 entre sí y con los alérgenos moleculares Alt a 1 o Cup a 1, cuya concentración se expresa en mcg/mL de cada uno de los componentes, basada en su estandarización biológica. La estandarización biológica se realiza de acuerdo con las \"Nordic Guidelines\" mediante pruebas \"in vivo\": pruebas cutáneas en prick test realizadas a 27 pacientes alérgicos con una clínica clara de rinitis o asma alérgica con empeoramiento de síntomas durante la exposición al alérgeno, seleccionados de acuerdo con la normativa de la EAACI. A dichos pacientes se les realiza prick-test a 4 diluciones por duplicado del extracto a estandarizar, junto con un control positivo y un control negativo. De esta forma, se determina el valor HEPD que se define como la concentración del extracto que produce en el paciente un área de la pápula igual a la histamina a 10 mg/mL"
      }
    },
    indications: "Tratamiento de pacientes con rinoconjuntivitis alérgica con o sin asma alérgica producidas por una hipersensibilidad de tipo I frente a los ácaros del polvo doméstico del género Dermatophagoides, al hongo Alternaria alternata y/o frente al polen de la familia Cupressaceae.",
    adminRoute: "Subcutánea",
    distribution: ["España", "Portugal"],
    storage: {
      conditions: ""
    },
    presentation: {
      inicio: {
        vialsDesc: "MOLMite se comercializa en viales monodosis de suspensión inyectable de 1 ml de suspensión en vial transparente (vidrio de tipo I) de 3 ml con tapón de goma (tipo I) y cápsula de cierre de plástico flip-off y precinto de aluminio. El tratamiento está formado por dos presentaciones: tratamiento de inicio y continuación. El tratamiento de inicio en el caso de Grupo 1/Grupo 2 y Grupo 1/Grupo 2/Grupo 23 consta de 2 viales A (etiqueta amarilla) y 4 viales B (etiqueta roja). El tratamiento de inicio en el caso de Grupo 1/Grupo 2/Alt a 1, Grupo 1/Grupo 2/Cup a 1, Grupo1/Grupo 2/Grupo 3/Alt a 1 y Grupo 1/Grupo 2/Grupo 23/Cup a 1 consta de 6 viales B (etiqueta roja). La presentación del tratamiento de continuación consta de 3 o 6 viales B, según prescripción médica. Se incluyen jeringuillas de 1 ml, de un solo uso, para asegurar las condiciones de esterilidad en la administración y facilitar la dosificación.",
        table: [
          { label: "Amarilla", labelColor: "yellow", vial: "VIAL A", venom: "", recomposition: "1 mL", concentration: "" },
          { label: "Roja", labelColor: "red", vial: "VIAL B", venom: "", recomposition: "1 mL", concentration: "" }
        ]
      },
      continuacion: {
        vialsDesc: "El tratamiento de mantenimiento consta de 3 o 6 viales B, según prescripción médica.",
        table: [
          { label: "Roja", labelColor: "red", vial: "VIAL B", venom: "", recomposition: "1 mL", concentration: "" }
        ]
      }
    },
    dosage: {
      conventional: {
        initiation: [],
        maintenance: []
      },
      cluster: {
        initiation: [
          { vial: "A", volume: "0,1+0,2* mL", interval: "Día 1 (30 minutos)" },
          { vial: "A", volume: "0,4+0,4* mL", interval: "Día 8 (semanal)" },
          { vial: "B", volume: "0,1+0,2* mL", interval: "Día 15 (semanal)" },
          { vial: "B", volume: "0,4+0,4* mL", interval: "Día 22 (semanal)" },
          { vial: "B", volume: "0,8 mL", interval: "Día 52 (mensual)" },
          { vial: "B", volume: "0.8 mL", interval: "Día 82 (mensual)" }
        ],
        maintenance: [
          { vial: "B", volume: "0,8 mL", interval: "mensual" }
        ]
      },
      alternative: {
        initiation: [
          { vial: "B", volume: "0,1+0,2* mL", interval: "Día 1 (semanal)" },
          { vial: "B", volume: "0,4+0,4* mL", interval: "Día 8 (semanal)" },
          { vial: "B", volume: "0,8 mL", interval: "Día 38 (mensual)" },
          { vial: "B", volume: "0.8 mL", interval: "Día 68 (mensual)" }
        ],
        maintenance: []
      }
    },
    packageDuration: {
      initiation: "Inicio viales A-A-B-B-B-B: 90 días, Inicio viales B-B-B-B-B-B: 180 días",
      continuation: "Continuación viales B-B-B: 90 días, Continuación viales B-B-B-B-B-B: 180 direcomendada (0,5 ml) . Si hay algún repetido descartalo."
    }
  },
  {
    id: 49,
    name: "MOLMITE MIX",
    manufacturer: "DIATER",
    characteristics: "Producto de inmunoterapia específica e individualizada con alérgenos que consiste en una mezcla de proteínas purificadas Der p 1/Der p 2 o Der p 1/Der p 2/Der p 23 en combinación con un extracto alergénico polimerizado de Lepidoglyphus destructor, Blomia tropicalis, Gramíneas salvajes (Dactylis glomerata, Lolium perenne, Phleum pratense y Poa pratensis), Olea europaea  o Gramíneas salvajes/Olea europaea.",
    composition: {
      galenic: ["Principio activo: Las proteínas purificadas de Der p 1, Der p 2 y Der p 23 son alérgenos mayores del ácaro Dermatophagoides pteronyssinus, correspondientes a los Grupos 1, 2 y 23, respectivamente. Lepidoglyphus destructor, Blomia tropicalis, Gramíneas salvajes (Dactylis glomerata, Lolium perenne, Phleum pratense y Poa pratensis), Olea europaea y Gramíneas salvajes/Olea europaea son extractos alergénicos polimerizados.", "Excipientes: cloruro sódico, hidróxido de aluminio, fenol, glicerol y agua para inyección.", "Excipientes en el caso de la combinación de Grupos 1,2 y/o 23 y Alt a 1/Lepidoglyphus destructor: cloruro sódico, hidróxido de aluminio, glicerol y agua para inyección."],
      allergenic: {
        allergens: [
          { name: "Grupo 1/Grupo 2", concentration: "0.40 mcg/ml/0.44 mcg/ml" },
          { name: "Grupo 1/Grupo 2/Grupo 23", concentration: "0.40  mcg/ml /0.44  mcg/ml /0.08 mcg/ml" },
          { name: "Lepidoglyphus destructor", concentration: "0.6 HEPD" },
          { name: "Blomia tropicalis", concentration: "0.1 HEPD" },
          { name: "Gramíneas salvajes", concentration: "0.3 HEPD" },
          { name: "Olea europaea", concentration: "0.77 HEPD" },
          { name: "Gramíneas salvajes/ Olea europaea", concentration: "0.2 HEPD/0.51 HEPD" }
        ],
        standardization: "Extracto estandarizado biológicamente cuya potencia alergénica es expresada en contenido de alérgeno mayor Der p 1, Der p 2, Der p 23 en mcg/ml y en valor HEPD como medida de potencia alergénica de los extractos polimerizados de Lepidoglyphus destructor, Blomia tropicalis, Gramíneas salvajes y  Olea europaea.  Estos extractos polimerizados están estandarizados biológicamente de acuerdo a las \"Nordic Guidelines\" mediante pruebas \"in vivo\": pruebas cutáneas en prick test realizadas a 30 pacientes alérgicos con una clínica clara de rinitis o asma alérgica con empeoramiento de síntomas durante la exposición al alérgeno, seleccionados de acuerdo con la normativa de la EAACI. A dichos pacientes se les realiza prick-test a 4 diluciones por duplicado del extracto a estandarizar, junto con un control positivo y un control negativo. De esta forma, se determina el valor HEPD que se define como la concentración del extracto que produce en el paciente un área de la pápula igual a la histamina a 10 mg/mL."
      }
    },
    indications: "Tratamiento de pacientes con rinoconjuntivitis alérgica con o sin asma alérgica producidas por una hipersensibilidad de tipo I frente a los ácaros del polvo doméstico (género Dermatophagoides), Lepidoglyphus destructor, Blomia tropicalis, Gramíneas salvajes y Olea europaea.",
    adminRoute: "Subcutánea",
    distribution: ["España", "Portugal"],
    storage: {
      conditions: ""
    },
    presentation: {
      inicio: {
        vialsDesc: "MOLMite Mix se comercializa en viales monodosis de suspensión inyectable de 0,6 ml de suspensión en vial transparente (vidrio de tipo I) de 3 ml con tapón de goma (tipo I) y cápsula de cierre de plástico flip-off y precinto de aluminio. Hay dos tamaños de envases: 3 o 6 viales B, según prescripción médica. Se incluyen jeringuillas de 1 ml, de un solo uso, para asegurar las condiciones de esterilidad en la administración y facilitar la dosificación.",
        table: [
          { label: "Roja", labelColor: "red", vial: "VIAL B", venom: "", recomposition: "0,6 mL", concentration: "" }
        ]
      },
      continuacion: {
        vialsDesc: "",
        table: []
      }
    },
    dosage: {
      conventional: {
        initiation: [],
        maintenance: []
      },
      cluster: {
        initiation: [
          { vial: "B", volume: "0,1+0,1 mL", interval: "Día 1 (30 minutos)" },
          { vial: "B", volume: "0,2+0,3 mL", interval: "Día 8 (semanal)" },
          { vial: "B", volume: "0,5 mL", interval: "Día 38 (mensual)" }
        ],
        maintenance: [
          { vial: "B", volume: "0,5 mL", interval: "mensual" }
        ]
      },
      alternative: {
        initiation: [],
        maintenance: []
      }
    },
    packageDuration: {
      initiation: "Presentación 3 viales B-B-B: 90 días",
      continuation: "Presentación 6 viales B-B-B-B-B-B: 180 días"
    }
  },
  {
    id: 50,
    name: "NOVO HELISEN DEPOT",
    manufacturer: "ALLERGOPHARMA",
    characteristics: "Novo-Helisen Depot son extractos de alérgenos de epitelios animales o mohos adsorbidos en hidróxido de aluminio. Novo-Helisen Depot contiene 1 principio activo o una combinación de principios activos. Conservar en nevera (entre 2ºC y 8ºC). No congelar.",
    composition: {
      galenic: ["Los principios activos de Novo-Helisen Depot son alérgenos naturales procedentes de epitelio animal y mohos adsorbidos en hidróxido de aluminio. Excipientes: hidróxido de aluminio (como adsorbente), fenol (como conservante), cloruro sódico, bicarbonato sódico (para ajuste de pH) y agua para preparaciones inyectables"],
      allergenic: {
        allergens: [
          { group: "EPITELIOS", name: "Epitelio de perro", concentration: "2500 PNU/ml", units: "Can f 1: 17 mcg/ml" },
          { group: "EPITELIOS", name: "Epitelio de gato", concentration: "2500 PNU/ml", units: "Fel d 1: 8 mcg/ml" },
          { group: "EPITELIOS", name: "Epitelio de caballo", concentration: "2500 PNU/ml", units: "Equ c 1: 36 mcg/ml" },
          { group: "HONGOS", name: "Alternaria", concentration: "500 PNU/ml", units: "" }
        ],
        standardization: ""
      }
    },
    indications: "Rinoconjuntivitis y/o asma con hipersensibilidad IgE mediada a hongos o epitelios de animales",
    adminRoute: "Subcutánea",
    distribution: ["Alemania", "Polonia", "Suiza", "Austria", "Luxemburgo", "China", "Italia", "Turquía", "Corea del Sur", "España"],
    storage: {
      conditions: "Conservar en nevera (entre 2ºC y 8ºC). No congelar."
    },
    presentation: {
      inicio: {
        vialsDesc: "Viales de inyección de 10 ml (vidrio incoloro de la clase hidrolítica I de según Ph.Eur ) con tapón de goma de clorobutilo (sin látex) y cápsula precinto de aluminio, conteniendo 4.5 ml de suspensión para inyección.",
        table: [
          { label: "Verde", labelColor: "green", vial: "Vial nº 1", venom: "", recomposition: "4.5 ml", concentration: "25 PNU/ml (epitelios) o 5 PNU/ml (hongos)" },
          { label: "Naranja", labelColor: "orange", vial: "Vial nº 2", venom: "", recomposition: "4.5 ml", concentration: "250 PNU/ml (epitelios) o 50 PNU/ml (hongos)" },
          { label: "Rojo", labelColor: "red", vial: "Vial nº 3", venom: "", recomposition: "4.5 ml", concentration: "2500 PNU/ml (epitelios) o 500 PNU/ml (hongos)" }
        ]
      },
      continuacion: {
        vialsDesc: "Viales de inyección de 10 ml (vidrio incoloro de la clase hidrolítica I de según Ph.Eur ) con tapón de goma de clorobutilo (sin látex) y cápsula precinto de aluminio, conteniendo 4.5 ml de suspensión para inyección.",
        table: [
          { label: "Rojo", labelColor: "red", vial: "Vial nº 3", venom: "", recomposition: "4.5 ml", concentration: "2500 PNU/ml (epitelios) o 500 PNU/ml (hongos)" }
        ]
      }
    },
    dosage: {
      conventional: {
        initiation: [
          { vial: "Verde 1", volume: "0,05", interval: "7-14 días (alta sensibilidad)" },
          { vial: "Verde 1", volume: "0,10", interval: "7-14 días (estándar)" },
          { vial: "Naranja 2", volume: "0,05", interval: "7-14 días (alta sensibilidad)" },
          { vial: "Naranja 2", volume: "0,10", interval: "7-14 días (estándar)" },
          { vial: "Roja 3", volume: "0,05", interval: "7-14 días (alta sensibilidad)" },
          { vial: "Roja 3", volume: "0,10", interval: "7-14 días (estándar)" }
        ],
        maintenance: []
      },
      cluster: {
        initiation: [],
        maintenance: []
      },
      alternative: {
        initiation: [],
        maintenance: []
      }
    },
    packageDuration: {
      initiation: "182 días",
      continuation: "252 días (2 viales 3)"
    }
  },
  {
    id: 51,
    name: "POLLIGOID",
    manufacturer: "ALLERGY THERAPEUTICS",
    characteristics: "Vacuna alergénica desensibilizante de administración subcutánea que contiene alérgenos modificados con glutaraldehido (alergoide), adsorbidos en L-tirosina. Conservar en nevera entre 2 y 8º C. No congelar.",
    composition: {
      galenic: ["Sustancias activas: extractos alergénicos de polen (gramíneas/centeno, árboles o malezas) selectivamente purificados formulados según la receta médica individualizada del especialista, hasta un máximo de 4 alergoides por vacuna.", "Excipientes: L-tirosina, fenol, glicerol (E-422), cloruro sódico y solución tampón conteniendo: fosfato disódico dodecahidratado, dihidrógeno fosfato de sódico dihidratado y agua para inyección."],
      allergenic: {
        allergens: [
          { group: "PÓLENES GRAMÍNEAS", name: "Mezcla de 13 gramíneas*", concentration: "4.000 SU/ml" },
          { group: "PÓLENES MALEZAS", name: "Ambrosia elatior", concentration: "4.000 SU/ml" },
          { group: "PÓLENES MALEZAS", name: "Artemisia vulgaris", concentration: "4.000 SU/ml" },
          { group: "PÓLENES MALEZAS", name: "Plantago lanceolata", concentration: "4.000 SU/ml" },
          { group: "PÓLENES MALEZAS", name: "Parietaria judaica", concentration: "4.000 SU/ml" },
          { group: "PÓLENES ÁRBOLES", name: "Mezcla de 3 árboles (Betula, Alnus y Corylus)", concentration: "4.000 SU/ml" },
          { group: "PÓLENES ÁRBOLES", name: "Olea europaea", concentration: "4.000 SU/ml" }
        ],
        standardization: "Polligoid contiene extractos alergénicos de polen (gramíneas, árboles o malezas) selectivamente purificados formulados con arreglo a la receta de un médico.  Los extractos alergénicos son sometidos a una determinación de la actividad alergénica y composición mediante métodos inmunológicos y bioquímicos.  Una vez determinada la actividad alergénica y composición, los alérgenos se convierten en alergoides mediante tratamiento con glutaraldehído y se determina su grado de modificación mediante el método de fluran y posteriormente se adsorben en tirosina microcristalina (MCT).  Los extractos alergénicos son caracterizados y normalizados (en SU, unidades normalizadas) mediante métodos bioquímicos para garantizar que el contenido de alérgenos y la concentración alergénica poseen una calidad óptima.  Finalmente se realiza la estandarización del producto final en unidades estandarizadas mediante pruebas inmunológicas y bioquímicas."
      }
    },
    indications: "Rinitis, conjuntivitis o asma por hipersensibilidad IgE mediada a alérgenos inhalados.",
    adminRoute: "Subcutánea.",
    distribution: ["Alemania", "Italia", "España", "Croacia"],
    storage: {
      conditions: "Conservar en nevera entre 2 y 8º C. No congelar."
    },
    presentation: {
      inicio: {
        vialsDesc: "Tratamiento de Inicio",
        table: [
          { label: "Verde", labelColor: "green", vial: "Vial nº 1", venom: "", recomposition: "1.35 mL", concentration: "600 SU/mL" },
          { label: "Amarillo", labelColor: "yellow", vial: "Vial nº 2", venom: "", recomposition: "1.35 ml", concentration: "1600 SU/mL" },
          { label: "Rojo", labelColor: "red", vial: "Vial nº 3", venom: "", recomposition: "2.25 ml", concentration: "4000 SU/mL" },
          { label: "Rojo", labelColor: "red", vial: "Vial nº 3", venom: "", recomposition: "3 ml", concentration: "4000 SU/mL" }
        ]
      },
      continuacion: {
        vialsDesc: "Tratamiento de continuación",
        table: [
          { label: "Rojo", labelColor: "red", vial: "Vial nº 3", venom: "", recomposition: "3 ml", concentration: "4000 SU/mL" },
          { label: "Rojo", labelColor: "red", vial: "Vial nº 3", venom: "", recomposition: "3 ml", concentration: "4000 SU/mL" }
        ]
      }
    },
    dosage: {
      conventional: {
        initiation: [
          { vial: "1 (Verde)", volume: "0.5 ml", interval: "1-2 semanas" },
          { vial: "2 (Amarillo)", volume: "0.5 ml", interval: "1-2 semanas" },
          { vial: "3 (Rojo)", volume: "0.5 ml", interval: "1-2 semanas" }
        ],
        maintenance: [
          { vial: "3 (Rojo)", volume: "0,5 ml", interval: "1-6 semanas" }
        ]
      },
      cluster: {
        initiation: [],
        maintenance: []
      },
      alternative: {
        initiation: [],
        maintenance: []
      }
    },
    packageDuration: {
      initiation: "Entre 2 y 10 semanas, en función de la pauta seleccionada.",
      continuation: "Entre 9 semanas y 13 meses, dependiendo de la pauta seleccionada."
    }
  },
  {
    id: 52,
    name: "POLLIMIX",
    manufacturer: "ALLERGY THERAPEUTICS",
    characteristics: "Pollimix contiene extractos alergénicos selectivamente purificados con arreglo a la receta médica individualizada de un alergólogo. Los alérgenos han sido convertidos en alergoides mediante tratamiento con glutaraldehído y adsorbidos a tirosina microcristalina (L-tirosina). Conservar en nevera entre 2-8ºC. No congelar.",
    composition: {
      galenic: ["Sustancias activas: Extractos de alérgenos según la prescripción del especialista.", "Excipientes: Tirosina microcristalina (L-tirosina), fenol, cloruro sódico, fosfato disódico dodecahidrato, fosfato diácido de potasio, fosfato de sodio dihidrógeno dihidratado y agua para inyectables."],
      allergenic: {
        allergens: [
          { group: "PÓLENES MALEZAS", name: "Chenopodium spp", concentration: "-" },
          { group: "PÓLENES MALEZAS", name: "Parietaria judaica", concentration: "-" },
          { group: "PÓLENES MALEZAS", name: "Salsola kali", concentration: "15.2 UIN/ml" },
          { group: "PÓLENES ÁRBOLES", name: "Cupressus arizonica", concentration: "-" },
          { group: "PÓLENES ÁRBOLES", name: "Platanus", concentration: "6.5 UIN/ml" },
          { group: "PÓLENES ÁRBOLES", name: "Olea europaea", concentration: "131,6 UIN/ml" },
          { group: "MEZCLAS", name: "Phleum pratense", concentration: "12,3 UIN/ml" },
          { group: "MEZCLAS", name: "Mezcla de 5 gramíneas*", concentration: "-" }
        ],
        standardization: "Los extractos alergénicos se caracterizan en Unidades Internas (UIN) o mg proteína/ml. Las unidades expresadas en UIN reflejan la actividad biológica de los extractos alergénicos incluidos y caracterizados a través de métodos bioquímicos destinados a obtener una calidad óptima del contenido alergénico y de la actividad alergénica."
      }
    },
    indications: "Rinoconjuntivitis y/o asma bronquial por hipersensibilidad IgE mediada a alérgenos inhalantes.",
    adminRoute: "Subcutánea",
    distribution: ["España"],
    storage: {
      conditions: "Conservar en nevera entre 2-8ºC. No congelar."
    },
    presentation: {
      inicio: {
        vialsDesc: "Pollimix se presenta en viales de vidrio neutro transparente que contienen un total de 3 ml. El envase puede contener 1 ó 2 viales, en función de la receta médica.",
        table: []
      },
      continuacion: {
        vialsDesc: "",
        table: []
      }
    },
    dosage: {
      conventional: {
        initiation: [],
        maintenance: []
      },
      cluster: {
        initiation: [
          { vial: "", volume: "0.2 ml", interval: "Día 1 (30 minutos)" },
          { vial: "", volume: "0.3 ml", interval: "Día 1" },
          { vial: "", volume: "0.5 ml", interval: "Día 8" }
        ],
        maintenance: [
          { vial: "", volume: "0.5 ml", interval: "Mensual" }
        ]
      },
      alternative: {
        initiation: [],
        maintenance: []
      }
    },
    packageDuration: {
      initiation: "1 vial: 5 meses, 2 viales: 11 meses",
      continuation: "1 vial: 6 meses, 2 viales: 12 meses"
    }
  },
  {
    id: 53,
    name: "POLLINEX QUATTRO",
    manufacturer: "ALLERGY THERAPEUTICS",
    characteristics: "Los extractos alergénicos de polen han sido convertidos en alergoides mediante tratamiento con glutaraldehído y son adsorbidos en L-tirosina. Cada dosis de 1 ml contiene 50 mcg de Monofosforil lípido A/AF (MPL®) adyuvante inmunológico. Conservar en nevera entre 2 y 8º C. No congelar.",
    composition: {
      galenic: ["Sustancias activas: Extractos de alérgenos modificados con glutaraldehido (alergoides), estandarizados y purificados selectivamente de pólenes de gramíneas/centeno, árboles y malezas, según la prescripción del especialista hasta un máximo de 4 alergoides por vacuna.", "Excipientes: L-tirosina, MLP (Monophosphoryl Lípid A/AF), fenol, cloruro sódico, sales tampón: fosfato disódico dodecahidrato, fosfato sódico dihidrógeno dihidratado y agua para inyección."],
      allergenic: {
        allergens: [
          { group: "PÓLENES GRAMÍNEAS", name: "Grupo Gramíneas*", concentration: "2.000 SU/ml" },
          { group: "PÓLENES MALEZAS", name: "Ambrosia elatior", concentration: "2.000 SU/ml" },
          { group: "PÓLENES MALEZAS", name: "Artemisia vulgaris", concentration: "2.000 SU/ml" },
          { group: "PÓLENES MALEZAS", name: "Chenopodium", concentration: "2.000 SU/ml" },
          { group: "PÓLENES MALEZAS", name: "Plantago lanceolata", concentration: "2.000 SU/ml" },
          { group: "PÓLENES ÁRBOLES", name: "Mezcla de 3 árboles (Betula , Alnus y Corylus)", concentration: "2.000 SU/ml" },
          { group: "PÓLENES ÁRBOLES", name: "Betula", concentration: "2.000 SU/ml" },
          { group: "PÓLENES ÁRBOLES", name: "Olea europaea", concentration: "2.000 SU/ml" }
        ],
        standardization: "Pollinex Quattro contiene extractos alergénicos de polen (gramíneas, árboles o malezas) selectivamente purificados formulados con arreglo a la receta de un médico. Los extractos alergénicos son sometidos a una determinación de la actividad alergénica y composición mediante métodos inmunológicos y bioquímicos (siguiendo las recomendaciones establecidas por el subcomité de Inmunoterapia de la EAACI y de la Academia Americana de la Alergia, Asma e Inmunología (AAAAI)). Una vez determinada la actividad alergénica y composición, los alérgenos se convierten en alergoides mediante tratamiento con glutaraldehído y se determina su grado de modificación mediante el método de fluran y posteriormente se adsorben en tirosina microcristalina (MCT). También se añade MPL (monofosforil lípido A). La concentración del producto se expresa en Unidades Normalizadas (SU, por sus siglas en inglés). Finalmente se realiza la estandarización del producto final en unidades estandarizadas mediante pruebas inmunológicas y bioquímicas."
      }
    },
    indications: "Rinitis, conjuntivitis o asma por hipersensibilidad IgE mediada a alérgenos inhalados.",
    adminRoute: "Subcutánea",
    distribution: ["Portugal", "Alemania", "Italia", "España", "Austria", "Grecia", "Reino Unido", "Croacia", "Irlanda"],
    storage: {
      conditions: "Conservar en nevera entre 2 y 8º C. No congelar."
    },
    presentation: {
      inicio: {
        vialsDesc: "",
        table: [
          { label: "Verde", labelColor: "green", vial: "Vial nº 1", venom: "", recomposition: "1.5 ml", concentration: "300 SU/ml" },
          { label: "Amarilla", labelColor: "yellow", vial: "Vial nº 2", venom: "", recomposition: "1.5 ml", concentration: "800 SU/ml" },
          { label: "Roja", labelColor: "red", vial: "Vial nº 3", venom: "", recomposition: "1.5 ml", concentration: "2000 SU/ml" },
          { label: "Roja", labelColor: "red", vial: "Vial nº 3", venom: "", recomposition: "1.5 ml", concentration: "2000 SU/ml" }
        ]
      },
      continuacion: {
        vialsDesc: "",
        table: []
      }
    },
    dosage: {
      conventional: {
        initiation: [
          { vial: "1 Verde", volume: "1 ml", interval: "1 – 2 semanas" },
          { vial: "2 Amarillo", volume: "1 ml", interval: "1- 2 semanas" },
          { vial: "3 Rojo", volume: "1 ml", interval: "1- 2 semanas" },
          { vial: "3 Rojo", volume: "1 ml", interval: "1 – 4 semanas" }
        ],
        maintenance: []
      },
      cluster: {
        initiation: [],
        maintenance: []
      },
      alternative: {
        initiation: [
          { vial: "1 Verde", volume: "0,5 ml", interval: "1 – 2 semanas" },
          { vial: "2 Amarillo", volume: "0,5 ml", interval: "1 – 2 semanas" },
          { vial: "3 Rojo", volume: "0,5 ml", interval: "1 – 2 semanas" },
          { vial: "3 Rojo", volume: "1 ml", interval: "1- 4 semanas" }
        ],
        maintenance: []
      }
    },
    packageDuration: {
      initiation: "Entre 4 y 16 semanas, en función de la pauta seleccionada.",
      continuation: ""
    }
  },
  {
    id: 54,
    name: "PURETHAL",
    manufacturer: "HAL ALLERGY",
    characteristics: "Vacuna terapéutica individualizada. Suspensión estéril para inyección de extractos alergénicos modificados químicamente con glutaraldehido y adsorbidos en hidróxido de aluminio, estandarizados biológicamente. Se debe mantener a una temperatura de 2º a 8º C. No congelar.",
    composition: {
      galenic: ["A/ Principios activos: Se prepara en soluciones terapéuticas individuales según la prescripción individual del médico, y limitados por las fórmulas específicamente facilitadas por el laboratorio.", "B/ Excipientes: Incluye hidróxido de aluminio, cloruro sódico, fenol y agua para inyectables. Contiene glutaraldehido."],
      allergenic: {
        allergens: [
          { group: "ÁCAROS", name: "Mezcla Dermatophagoides: D. pteronyssinus + D. farinae", concentration: "20.000 AU/ml" },
          { group: "PÓLENES GRAMÍNEAS", name: "Mezcla gramíneas: Agrostis, Anthoxanthum, Dactylis, Lolium, Arrhenatherum, Festuca, Poa, Secale, Holcus, Phleum", concentration: "20.000 AU/ml" },
          { group: "PÓLENES PLANTAS", name: "Parietaria", concentration: "20.000 AU/ml" },
          { group: "PÓLENES PLANTAS", name: "Artemisia vulgaris", concentration: "20.000 AU/ml" },
          { group: "PÓLENES ÁRBOLES", name: "Betula verrucosa", concentration: "20.000 AU/ml" },
          { group: "PÓLENES ÁRBOLES", name: "Árboles mezcla: Betula, Alnus y Corylus", concentration: "20.000 AU/ml" },
          { group: "PÓLENES MEZCLAS", name: "Mezcla gramíneas + Betula", concentration: "20.000 AU/ml" },
          { group: "PÓLENES MEZCLAS", name: "Mezcla gramíneas + Mezcla árboles", concentration: "20.000 AU/ml" },
          { group: "PÓLENES MEZCLAS", name: "Mezcla gramíneas + Artemisia", concentration: "20.000 AU/ml" },
          { group: "PÓLENES MEZCLAS", name: "Mezcla gramíneas + Triticum", concentration: "20.000 AU/ml" },
          { group: "PÓLENES MEZCLAS", name: "Mezcla gramíneas + Artemisia + Triticum", concentration: "20.000 AU/ml" }
        ],
        standardization: "Extractos valorados en AU (Allergy Units) según el sistema desarrollado por la FDA (American Food and Drug Administration). El sistema AU cuantifica la reacción de las pruebas cutáneas en un mínimo de 20 pacientes altamente sensibilizados. Las pruebas cutáneas muestran una curva escalonada que permite definir de forma muy precisa en valor D50. La D50 es la dilución que causa una suma de diámetros de 50 mm en las pruebas cutáneas. Las definiciones de estas unidades son las siguientes: AU/ml: 100.000 AU/ml. Corresponden a un extracto con una potencia media de D50=14."
      }
    },
    indications: "Rinitis, conjuntivitis o asma por hipersensibilidad IgE mediada a alérgenos inhalados.",
    adminRoute: "Inyectable por vía subcutánea.",
    distribution: ["Holanda", "Alemania", "Austria", "Polonia", "Italia", "España", "Bélgica", "Luxemburgo", "Estonia", "Grecia", "Hungría", "Israel", "Japón", "Portugal", "Rumania", "Rusia", "Eslovenia"],
    storage: {
      conditions: "Se debe mantener a una temperatura de 2º a 8º C. No congelar."
    },
    presentation: {
      inicio: {
        vialsDesc: "El tratamiento inicial y de mantenimiento de PURETHAL consta de un único vial con una concentración única de 20.000 AU/ml.\nPresentación: Caja con 1 vial de 3 ml. Caja con 2 viales de 3 ml.",
        table: []
      },
      continuacion: {
        vialsDesc: "",
        table: []
      }
    },
    dosage: {
      conventional: {
        initiation: [
          { vial: "", volume: "0,05", interval: "Semana 0" },
          { vial: "", volume: "0,1", interval: "Semana 1" },
          { vial: "", volume: "0,2", interval: "Semana 2" },
          { vial: "", volume: "0,3", interval: "Semana 3" },
          { vial: "", volume: "0,4", interval: "Semana 4" },
          { vial: "", volume: "0,5", interval: "Semana 5" }
        ],
        maintenance: [
          { vial: "", volume: "0,5", interval: "4 (± 2) semanas" }
        ]
      },
      cluster: {
        initiation: [],
        maintenance: []
      },
      alternative: {
        initiation: [],
        maintenance: []
      }
    },
    packageDuration: {
      initiation: "Duración variable en función de la pauta",
      continuation: "Un vial: 6 meses de tratamiento. Dos viales: Un año de tratamiento."
    }
  },
  {
    id: 55,
    name: "RETARD RAPID",
    manufacturer: "LETI",
    characteristics: "Extractos hiposensibilizantes acuosos en solución salina fenolada, adsorbidos en hidróxido de aluminio y estandarizados biológicamente en HEPL/ml. Se prepara en suspensiones terapéuticas individuales con la composición determinada en la prescripción médica. Condiciones de conservación: Almacenar el producto en la nevera entre 2 y 8ºC. No congelar.",
    composition: {
      galenic: ["Se prepara en suspensiones terapéuticas individuales con la composición determinada en la prescripción médica. Existe la posibilidad de solicitar cualquier mezcla cualitativa y cuantitativa. Lista de excipientes: Cloruro sódico, fenol, hidróxido de aluminio y agua para inyectables."],
      allergenic: {
        allergens: [
          { group: "ÁCAROS", name: "Dermatophagoides pteronyssinus", concentration: "10 HEPL/ml" },
          { group: "ÁCAROS", name: "Dermatophagoides farinae", concentration: "10 HEPL/ml" },
          { group: "ÁCAROS", name: "Mezcla D. pteronyssinus + D. farinae", concentration: "10 HEPL/ml" },
          { group: "ÁCAROS", name: "Acarus siro", concentration: "10 HEPL/ml" },
          { group: "ÁCAROS", name: "Blomia tropicalis", concentration: "10 HEPL/ml" },
          { group: "ÁCAROS", name: "Chortoglyphus arcuatus", concentration: "10 HEPL/ml" },
          { group: "ÁCAROS", name: "Euroglyphus maynei", concentration: "10 HEPL/ml" },
          { group: "ÁCAROS", name: "Glycyphagus domesticus", concentration: "10 HEPL/ml" },
          { group: "ÁCAROS", name: "Lepidoglyphus destructor", concentration: "10 HEPL/ml" },
          { group: "ÁCAROS", name: "Tyrophagus putrescentiae", concentration: "10 HEPL/ml" },
          { group: "EPITELIOS", name: "Caballo", concentration: "10 HEPL/ml" },
          { group: "EPITELIOS", name: "Conejo", concentration: "10 HEPL/ml" },
          { group: "EPITELIOS", name: "Gato", concentration: "10 HEPL/ml" },
          { group: "EPITELIOS", name: "Perro", concentration: "10 HEPL/ml" },
          { group: "HONGOS", name: "Alternaria alternata", concentration: "10 HEPL/ml" },
          { group: "GRUPOS PÓLENES", name: "Grupo gramíneas", concentration: "100 HEPL/ml" },
          { group: "GRUPOS PÓLENES", name: "Grupo cereales", concentration: "100 HEPL/ml" },
          { group: "GRUPOS PÓLENES", name: "Grupo hierbas (Artemisia, Chenopodium, Plantago, Salsola)", concentration: "100 HEPL/ml" },
          { group: "PÓLENES GRAMÍNEAS", name: "Agrostis alba", concentration: "100 HEPL/ml" },
          { group: "PÓLENES GRAMÍNEAS", name: "Anthoxanthum odoratum", concentration: "100 HEPL/ml" },
          { group: "PÓLENES GRAMÍNEAS", name: "Cynodon dactylon", concentration: "100 HEPL/ml" },
          { group: "PÓLENES GRAMÍNEAS", name: "Dactylis glomerata", concentration: "100 HEPL/ml" },
          { group: "PÓLENES GRAMÍNEAS", name: "Festuca elatior", concentration: "100 HEPL/ml" },
          { group: "PÓLENES GRAMÍNEAS", name: "Holcus lanatus", concentration: "100 HEPL/ml" },
          { group: "PÓLENES GRAMÍNEAS", name: "Lolium perenne", concentration: "100 HEPL/ml" },
          { group: "PÓLENES GRAMÍNEAS", name: "Phleum pratense", concentration: "100 HEPL/ml" },
          { group: "PÓLENES GRAMÍNEAS", name: "Poa pratensis", concentration: "100 HEPL/ml" },
          { group: "PÓLENES GRAMÍNEAS", name: "Phragmites communis", concentration: "100 HEPL/ml" },
          { group: "PÓLENES CEREALES", name: "Avena sativa", concentration: "100 HEPL/ml" },
          { group: "PÓLENES CEREALES", name: "Hordeum vulgare", concentration: "100 HEPL/ml" },
          { group: "PÓLENES CEREALES", name: "Secale cereale", concentration: "100 HEPL/ml" },
          { group: "PÓLENES CEREALES", name: "Triticum aestivum", concentration: "100 HEPL/ml" },
          { group: "PÓLENES CEREALES", name: "Zea mays", concentration: "100 HEPL/ml" },
          { group: "PÓLENES HIERBAS", name: "Chenopodium", concentration: "100 HEPL/ml" },
          { group: "PÓLENES HIERBAS", name: "Parietaria judaica", concentration: "100 HEPL/ml" },
          { group: "PÓLENES HIERBAS", name: "Plantago lanceolata", concentration: "100 HEPL/ml" },
          { group: "PÓLENES HIERBAS", name: "Salsola kali", concentration: "100 HEPL/ml" },
          { group: "PÓLENES ÁRBOLES", name: "Alnus glutinosa", concentration: "100 HEPL/ml" },
          { group: "PÓLENES ÁRBOLES", name: "Betula alba", concentration: "100 HEPL/ml" },
          { group: "PÓLENES ÁRBOLES", name: "Corylus avellana", concentration: "100 HEPL/ml" },
          { group: "PÓLENES ÁRBOLES", name: "Cupressus arizonica", concentration: "100 HEPL/ml" },
          { group: "PÓLENES ÁRBOLES", name: "Platanus acerifolia", concentration: "100 HEPL/ml" },
          { group: "PÓLENES ÁRBOLES", name: "Olea europaea", concentration: "100 HEPL/ml" }
        ],
        standardization: "Los extractos hiposensibilizantes Retard están estandarizados biológicamente en unidades HEPL/ml. \"Se define que la actividad de un extracto alergénico es 10 HEP (Histamine Equivalent in Prick testing) por ml cuando produce una reacción cutánea del mismo tamaño que la que produce una solución positiva de referencia, constituida por histamina 54,3 mmol/l (dihidroclorhidrato de histamina a 10 mg/ml), cuando ambas soluciones se administran usando la misma técnica (prick test) en un mínimo de 20 individuos clínicamente alérgicos frente al extracto alergénico correspondiente.\" La unidad HEPL se basa en la cantidad de preparación de referencia interna (PRI) que produce in vitro el 50% de inhibición de unión a IgE específica, usando el método REINA-Competición, y en la experiencia en su uso clínico. La unidad HEP está bien documentada en la bibliografía y es la unidad recomendada por el Nordic Council on Medicines en sus directrices para el registro de extractos alergénicos."
      }
    },
    indications: "Rinitis, conjuntivitis o asma por hipersensibilidad IgE mediada a alérgenos inhalados.",
    adminRoute: "Inyectable por vía subcutánea.",
    distribution: ["España", "Portugal", "Andorra", "Alemania", "Colombia"],
    storage: {
      conditions: "Almacenar el producto en la nevera entre 2 y 8ºC. No congelar."
    },
    presentation: {
      inicio: {
        vialsDesc: "Se suministran en viales de 3,5 ml de solución alergénica, según lo indicado en la prescripción médica, con las siguientes concentraciones:",
        table: [
          { label: "Verde", labelColor: "green", vial: "Vial A", venom: "", recomposition: "", concentration: "1 HEPL/ml (Pólenes*), 0,1 HEPL/ml (Ácaros, hongos y epitelios)" },
          { label: "Azul", labelColor: "blue", vial: "Vial B", venom: "", recomposition: "", concentration: "10 HEPL/ml" },
          { label: "Naranja", labelColor: "orange", vial: "Vial C", venom: "", recomposition: "", concentration: "100 HEPL/ml" }
        ]
      },
      continuacion: {
        vialsDesc: "Pauta convencional: Caja con 3 viales (A, B y C). Pauta cluster: Caja con 2 viales (B y C) o Caja con 3 viales (1 vial B y 2 viales C) Tratamiento de continuación: Caja con 1 o 2 viales de la concentración C.",
        table: []
      }
    },
    dosage: {
      conventional: {
        initiation: [
          { vial: "A", volume: "0,1", interval: "7 días" },
          { vial: "A", volume: "0,3", interval: "7 días" },
          { vial: "A", volume: "0,5", interval: "7 días" },
          { vial: "B", volume: "0,1", interval: "7 días" },
          { vial: "B", volume: "0,3", interval: "7 días" },
          { vial: "B", volume: "0,5", interval: "7 días" },
          { vial: "C", volume: "0,1", interval: "7 días" },
          { vial: "C", volume: "0,3", interval: "7 días" },
          { vial: "C", volume: "0,5", interval: "7 días" }
        ],
        maintenance: [
          { vial: "C", volume: "0,5", interval: "30 días" }
        ]
      },
      cluster: {
        initiation: [
          { vial: "B", volume: "0,1+0,2*", interval: "7 días" },
          { vial: "B", volume: "0,2+0,3*", interval: "7 días" },
          { vial: "C", volume: "0,1+0,2*", interval: "7 días" },
          { vial: "C", volume: "0,2+0,3*", interval: "7 días" }
        ],
        maintenance: [
          { vial: "C", volume: "0,5", interval: "30 días" }
        ]
      },
      alternative: {
        initiation: [],
        maintenance: []
      }
    },
    packageDuration: {
      initiation: "Pauta convencional (viales A-B-C): 8 meses. Pauta cluster (1 vial B y 1 vial C): 6 meses y 3 semanas. Pauta cluster (1 vial B y 2 viales C): 13 meses",
      continuation: "1 vial C: 7 meses, 2 viales C: 14 meses"
    }
  },
  {
    id: 56,
    name: "STALGOID MIX PLUS",
    manufacturer: "STALLERGENES IBERICA",
    characteristics: "Stalgoid Mix Plus es una solución de extractos alergénicos a altas dosis polimerizados con glutaraldehído y estandarizados biológicamente para administración por vía subcutánea. Condiciones de conservación: Almacenar el producto en la nevera entre 2ºC y 8ºC. No congelar.",
    composition: {
      galenic: ["Principios activos: Se prepara de forma individualizada para cada paciente con los alérgenos seleccionados en la prescripción médica. Se incluyen 2 o 3 alérgenos a dosis máximas terapéuticas en proporciones iguales", "Excipientes: fenol, cloruro sódico y agua pura para preparaciones inyectables"],
      allergenic: {
        allergens: [
          { group: "ÁCAROS", name: "Blomia tropicalis", concentration: "0,1 HEPD/ml" },
          { group: "ÁCAROS", name: "Dermatophagoides farinae", concentration: "0,3 HEPD/ml" },
          { group: "ÁCAROS", name: "Dermatophagoides pteronyssinus", concentration: "0,3 HEPD/ml" },
          { group: "ÁCAROS", name: "Lepidoglyphus destructor", concentration: "0,3 HEPD/ml" },
          { group: "PÓLENES MALEZAS", name: "Artemisia vulgaris", concentration: "0,6 HEPD/ml" },
          { group: "PÓLENES MALEZAS", name: "Chenopodium album", concentration: "0,15 HEPD/ml" },
          { group: "PÓLENES MALEZAS", name: "Parietaria Judaica", concentration: "0,2 HEPD/ml" },
          { group: "PÓLENES MALEZAS", name: "Plantago lanceolata", concentration: "0,6 HEPD/ml" },
          { group: "PÓLENES MALEZAS", name: "Salsola kali", concentration: "0,06 HEPD/ml" },
          { group: "PÓLENES GRAMÍNEAS", name: "Gramíneas salvajes", concentration: "0,3 HEPD/ml" },
          { group: "PÓLENES ÁRBOLES", name: "Cupressaceae", concentration: "0,77 HEPD/ml" },
          { group: "PÓLENES ÁRBOLES", name: "Olea europea", concentration: "0,77 HEPD/ml" },
          { group: "PÓLENES ÁRBOLES", name: "Platanus acerifolia", concentration: "0,68 HEPD/ml" }
        ],
        standardization: "La actividad biológica de los alergenos que están estandarizados biológicamente se calcula de acuerdo con las \"Nordic Guidelines\" mediante pruebas \"in vivo\": pruebas cutáneas skin prick test realizadas en alrededor de 30 pacientes alérgicos con una clínica clara de rinitis o asma alérgica y que presentan empeoramiento de los síntomas durante la exposición al alergeno seleccionados de acuerdo a la normativa de la EAACI. A dichos pacientes se les hace skin prick-test a 4 diluciones por duplicado del extracto a estandarizar junto con un control positivo y un control negativo. De esta forma se determina el valor HEPD, que se define como la concentración del extracto que produce en el paciente medio un área de la pápula igual a la histamina a 10 mg/mL. La valoración biológica del extracto se realiza en HEP/mL (HEP: Histamine equivalent in prick)"
      }
    },
    indications: "Rinoconjuntivitis y/o asma bronquial por hipersensibilidad IgE mediada a alérgenos inhalantes.",
    adminRoute: "Subcutánea",
    distribution: ["España"],
    storage: {
      conditions: "Almacenar el producto en la nevera entre 2ºC y 8ºC. No congelar."
    },
    presentation: {
      inicio: {
        vialsDesc: "Tratamiento de Iniciación Puede incluir 1, 2 o 3 viales de extracto alergénico. Las posibles presentaciones son: - Presentación con 1 vial de polimerizado (3) - Presentación con 2 viales de polimerizado (3-3) - Presentación con 3 viales de polimerizado (1-2-3)",
        table: [
          { label: "Verde", labelColor: "green", vial: "Vial nº 1", venom: "", recomposition: "3 ml", concentration: "1/100 del vial 3" },
          { label: "Amarillo", labelColor: "yellow", vial: "Vial nº 2", venom: "", recomposition: "3 ml", concentration: "1/10 del vial 3" },
          { label: "Rojo", labelColor: "red", vial: "Vial nº 3", venom: "", recomposition: "3 ml", concentration: "Concentración máxima (diferente para cada alérgeno)" }
        ]
      },
      continuacion: {
        vialsDesc: "Tratamiento de Continuación Puede contener 1 o 2 viales nº 3.",
        table: [
          { label: "Rojo", labelColor: "red", vial: "Vial nº 3", venom: "", recomposition: "3 ml", concentration: "Concentración máxima (diferente para cada alérgeno)" }
        ]
      }
    },
    dosage: {
      conventional: {
        initiation: [
          { vial: "Roja 3", volume: "0,2 ml", interval: "1er. día" },
          { vial: "Roja 3", volume: "0,3 ml", interval: "1 semana" },
          { vial: "Roja 3", volume: "0,5 ml", interval: "1 mes" }
        ],
        maintenance: [
          { vial: "Roja 3", volume: "0.5 ml", interval: "mensual" }
        ]
      },
      cluster: {
        initiation: [
          { vial: "Roja 3", volume: "0,2 + 0.3", interval: "30-45 minutos" }
        ],
        maintenance: [
          { vial: "Roja 3", volume: "0,5 ml", interval: "1 mes" }
        ]
      },
      alternative: {
        initiation: [
          { vial: "Verde 1", volume: "0,5 ml", interval: "1 semana" },
          { vial: "Amarilla 2", volume: "0,5 ml", interval: "1 semana" },
          { vial: "Roja 3", volume: "0,5 ml", interval: "1 semana" }
        ],
        maintenance: [
          { vial: "Roja 3", volume: "0,5 ml", interval: "1 mes" }
        ]
      }
    },
    packageDuration: {
      initiation: "Stalgoid Mix Plus Inicio 1,2,3: 6 meses y medio",
      continuation: "Stalgoid Mix Plus mantenimiento 1 vial: 6 meses Stalgoid Mix Plus mantenimiento 2 viales: 12 meses"
    }
  },
  {
    id: 57,
    name: "T y TOP ACAROS",
    manufacturer: "ALLERGY THERAPEUTICS",
    characteristics: "Vacuna alergénica desensibilizante de alérgenos nativos adsorbidos en L-tirosina, lo cual garantiza una liberación gradual del principio activo (efecto depot). Conservar en nevera entre 2 y 8º C. No congelar.",
    composition: {
      galenic: ["Sustancias activas: Atendiendo a la fórmula específicamente solicitada por el especialista, hasta un máximo de 3 alérgenos por vacuna.", "Excipientes: L-tirosina, glicerol, fenol, cloruro sódico, sales tampón: fosfato disódico dodecahidrato, dihidrógeno fosfato de sódico dihidrato y agua para inyección."],
      allergenic: {
        allergens: [
          { group: "ÁCAROS", name: "Dermatophagoides pteronyssinus", concentration: "33.332 TU/ml" },
          { group: "ÁCAROS", name: "Dermatophagoides farinae", concentration: "33.332 TU/ml" },
          { group: "ÁCAROS", name: "Blomia tropicalis", concentration: "33.332 TU/ml" },
          { group: "ÁCAROS", name: "Mezcla Dermatophagoides", concentration: "33.332 TU/ml" }
        ],
        standardization: "Los extractos alergénicos se caracterizan y estandarizan (en Unidades Terapéuticas (TU, por sus siglas en inglés) a través de métodos bioquímicos destinados a obtener una calidad óptima del contenido alergénico y de la actividad alergénica. La proporción de alérgenos mayores se establece adicionalmente. Las unidades expresadas en TU/ml reflejan la actividad biológica de los extractos alergénicos incluidos. Esta actividad biológica se deriva directamente de soluciones diagnósticas clínicamente optimizadas utilizadas para pruebas de alérgenos."
      }
    },
    indications: "Rinitis, conjuntivitis o asma por hipersensibilidad IgE mediada a ácaros.",
    adminRoute: "Subcutánea",
    distribution: ["Portugal", "Alemania", "Italia", "España", "Austria", "Reino Unido", "Croacia", "Irlanda"],
    storage: {
      conditions: "Conservar en nevera entre 2 y 8º C. No congelar."
    },
    presentation: {
      inicio: {
        vialsDesc: "TRATAMIENTO DE INICIO: Pauta Convencional (vial nº 0 opcional):",
        table: [
          { label: "Negro", labelColor: "black", vial: "Vial nº 0*", venom: "", recomposition: "2 mL", concentration: "521 TU/ml" },
          { label: "Verde", labelColor: "green", vial: "Vial nº 1", venom: "", recomposition: "2 ml", concentration: "4.167 TU/ml" },
          { label: "Rojo", labelColor: "red", vial: "Vial nº 2", venom: "", recomposition: "2,5 ml", concentration: "33.332 TU/ml" }
        ]
      },
      continuacion: {
        vialsDesc: "TRATAMIENTO DE CONTINUACIÓN: 1 ó 2 viales nº 2",
        table: [
          { label: "Rojo", labelColor: "red", vial: "Vial nº 2", venom: "", recomposition: "2,5 ml", concentration: "33.332 TU/ml" }
        ]
      }
    },
    dosage: {
      conventional: {
        initiation: [
          { vial: "0* (Negro)", volume: "0,1 ml", interval: "7-14 días" },
          { vial: "0* (Negro)", volume: "0,3 ml", interval: "7-14 días" },
          { vial: "0* (Negro)", volume: "0,5 ml", interval: "7-14 días" },
          { vial: "1 (Verde)", volume: "0,1 ml", interval: "7-14 días" },
          { vial: "1 (Verde)", volume: "0,3 ml", interval: "7-14 días" },
          { vial: "1 (Verde)", volume: "0,5 ml", interval: "7-14 días" },
          { vial: "2 (Rojo)", volume: "0,1 ml", interval: "7-14 días" },
          { vial: "2 (Rojo)", volume: "0,3 ml", interval: "7-14 días" },
          { vial: "2 (Rojo)", volume: "0,5 ml", interval: "7-14 días" }
        ],
        maintenance: []
      },
      cluster: {
        initiation: [
          { vial: "2 Rojo", volume: "0,1 ml", interval: "Día 1 (0 min)" },
          { vial: "2 Rojo", volume: "0,2 ml", interval: "Día 1 (30 min)" },
          { vial: "2 Rojo", volume: "0,2 ml", interval: "Día 8 (0 min)" },
          { vial: "2 Rojo", volume: "0,3 ml", interval: "Día 8 (30 min)" },
          { vial: "2 Rojo", volume: "0,5 ml", interval: "Día 36" }
        ],
        maintenance: []
      },
      alternative: {
        initiation: [],
        maintenance: []
      }
    },
    packageDuration: {
      initiation: "de 36 días a 16 semanas.",
      continuation: "Entre 5 y 15 meses, en función de la presentación seleccionada (1 ó 2 viales) y del intervalo entre inyecciones."
    }
  },
  {
    id: 58,
    name: "T y TOP COMPLET",
    manufacturer: "ALLERGY THERAPEUTICS",
    characteristics: "Vacuna alergénica desensibilizante de alérgenos nativos adsorbidos en L-tirosina, lo cual garantiza una liberación gradual del principio activo (efecto depot). Conservar en nevera entre 2 y 8º C. No congelar.",
    composition: {
      galenic: ["Sustancias activas: Atendiendo a la fórmula específicamente solicitada por el especialista.", "Excipientes: L-tirosina, glicerol (E-422), fenol, cloruro sódico, sales tampón: fosfato disódico dodecahidrato, dihidrógeno fosfato de sódico dihidrato y agua para inyección."],
      allergenic: {
        allergens: [
          { group: "PÓLENES GRAMÍNEAS", name: "Mezcla 12 Gramíneas*", concentration: "160.000 TU/ml" },
          { group: "PÓLENES GRAMÍNEAS", name: "Secale cereale", concentration: "160.000 TU/ml" },
          { group: "PÓLENES GRAMÍNEAS", name: "Cynodon dactylon", concentration: "160.000 TU/ml" },
          { group: "PÓLENES MALEZAS", name: "Ambrosia elatior", concentration: "160.000 TU/ml" },
          { group: "PÓLENES MALEZAS", name: "Artemisia vulgaris", concentration: "160.000 TU/ml" },
          { group: "PÓLENES MALEZAS", name: "Chenopodium", concentration: "160.000 TU/ml" },
          { group: "PÓLENES MALEZAS", name: "Plantago lanceolata", concentration: "160.000 TU/ml" },
          { group: "PÓLENES MALEZAS", name: "Urtica dioica", concentration: "160.000 TU/ml" },
          { group: "PÓLENES MALEZAS", name: "Parietaria judaica", concentration: "32.000 TU/ml" },
          { group: "PÓLENES MALEZAS", name: "Salsola kali", concentration: "25.352 TU/ml" },
          { group: "PÓLENES ÁRBOLES", name: "Mezcla de 3 árboles (Betula, Alnus y Corylus)", concentration: "160.000 TU/ml" },
          { group: "PÓLENES ÁRBOLES", name: "Betula", concentration: "160.000 TU/ml" },
          { group: "PÓLENES ÁRBOLES", name: "Alnus", concentration: "160.000 TU/ml" },
          { group: "PÓLENES ÁRBOLES", name: "Corylus", concentration: "160.000 TU/ml" },
          { group: "PÓLENES ÁRBOLES", name: "C. arizonica", concentration: "66.666 TU/ml" },
          { group: "PÓLENES ÁRBOLES", name: "Fraxinus spp.", concentration: "160.000 TU/ml" },
          { group: "PÓLENES ÁRBOLES", name: "Fagus spp.", concentration: "160.000 TU/ml" },
          { group: "PÓLENES ÁRBOLES", name: "Olea europaea", concentration: "160.000 TU/ml" },
          { group: "PÓLENES ÁRBOLES", name: "Platanus spp.", concentration: "160.000 TU/ml" },
          { group: "PÓLENES ÁRBOLES", name: "Quercus spp.", concentration: "160.000 TU/ml" },
          { group: "HONGOS", name: "Alternaria alternata", concentration: "26.666 TU/ml" },
          { group: "HONGOS", name: "Cladosporium cladosporioides", concentration: "26.666 TU/ml" },
          { group: "EPITELIOS", name: "Gato (epitelio)", concentration: "26.666 TU/ml" },
          { group: "EPITELIOS", name: "Perro (pelo)", concentration: "26.666 TU/ml" },
          { group: "EPITELIOS", name: "Caballo (pelo)", concentration: "1.666 TU/ml" },
          { group: "CUCARACHAS", name: "Mezcla de cucarachas (Blatella germanica–Periplaneta americana)", concentration: "66.666 TU/ml" },
          { group: "ÁCAROS", name: "Dermatophagoides pteronyssinus", concentration: "33.332 TU/ml" },
          { group: "ÁCAROS", name: "Dermatophagoides farinae", concentration: "33.332 TU/ml" },
          { group: "ÁCAROS", name: "Blomia tropicalis", concentration: "33.332 TU/ml" }
        ],
        standardization: "Los extractos alergénicos se caracterizan y estandarizan (en Unidades Terapéuticas (TU, por sus siglas en inglés) a través de métodos bioquímicos destinados a obtener una calidad óptima del contenido alergénico y de la actividad alergénica. La proporción de alérgenos mayores se establece adicionalmente para extractos alergénicos seleccionados. Las unidades expresadas en TU/ml reflejan la actividad biológica de los extractos alergénicos incluidos. Esta actividad biológica se deriva directamente de soluciones diagnósticas clínicamente optimizadas utilizadas para pruebas de alérgenos."
      }
    },
    indications: "Rinitis, conjuntivitis o asma por hipersensibilidad IgE mediada a alérgenos inhalados.",
    adminRoute: "Subcutánea",
    distribution: ["Portugal", "Alemania", "Italia", "España", "Austria", "Reino Unido", "Croacia", "Irlanda"],
    storage: {
      conditions: "Conservar en nevera entre 2 y 8º C. No congelar."
    },
    presentation: {
      inicio: {
        vialsDesc: "TRATAMIENTO DE INICIO (vial 0 opcional):",
        table: [
          { label: "Negro", labelColor: "black", vial: "Vial nº 0*", venom: "", recomposition: "2 mL", concentration: "1/64 del vial 2" },
          { label: "Verde", labelColor: "green", vial: "Vial nº 1", venom: "", recomposition: "2 ml", concentration: "1/8 del vial 2" },
          { label: "Rojo", labelColor: "red", vial: "Vial nº 2", venom: "", recomposition: "2,5 ml", concentration: "Concentración máxima" }
        ]
      },
      continuacion: {
        vialsDesc: "TRATAMIENTO DE CONTINUACIÓN: 1 ó 2 viales nº 2",
        table: [
          { label: "Rojo", labelColor: "red", vial: "Vial nº 2", venom: "", recomposition: "2,5 ml", concentration: "Concentración máxima" }
        ]
      }
    },
    dosage: {
      conventional: {
        initiation: [
          { vial: "0* (Negro)", volume: "0,1 ml", interval: "7-14 días" },
          { vial: "0* (Negro)", volume: "0,2 ml", interval: "7-14 días" },
          { vial: "0* (Negro)", volume: "0,4 ml", interval: "7-14 días" },
          { vial: "1 (Verde)", volume: "0,1 ml", interval: "7-14 días" },
          { vial: "1 (Verde)", volume: "0,2 ml", interval: "7-14 días" },
          { vial: "1 (Verde)", volume: "0,4 ml", interval: "7-14 días" },
          { vial: "2 (Rojo)", volume: "0,1 ml", interval: "7-14 días" },
          { vial: "2 (Rojo)", volume: "0,2 ml", interval: "7-14 días" },
          { vial: "2 (Rojo)", volume: "0,4 ml", interval: "7-14 días" }
        ],
        maintenance: [
          { vial: "2 (Rojo)", volume: "Máximo de 0,5 ml", interval: "4-6 semanas" }
        ]
      },
      cluster: {
        initiation: [],
        maintenance: []
      },
      alternative: {
        initiation: [],
        maintenance: []
      }
    },
    packageDuration: {
      initiation: "Entre 8 y 16 semanas en función de la pauta seleccionada.",
      continuation: "Entre 5 y 15 meses, en función de la presentación seleccionada (1 ó 2 viales) y el intervalo entre inyecciones."
    }
  },
  {
    id: 59,
    name: "VENOM ATL",
    manufacturer: "ALLERGY THERAPEUTICS",
    characteristics: "Liofilizado de veneno de abeja (Apis mellifera) o avispa (Vespula spp o Polistes dominula) que se debe reconstituir con un diluyente especial para obtener una solución de administración subcutánea. Conservar en nevera entre 2 y 8º C. No congelar.",
    composition: {
      galenic: ["Sustancias activas: Veneno puro de abeja (Apis mellifera) o de avispa (Vespula spp o Polistes dominula).", "Excipientes: Vial liofilizado con veneno: manitol. Diluyente: Cloruro sódico, albúmina sérica humana, fenol y agua para inyección."],
      allergenic: {
        allergens: ["Veneno puro de abeja (Apis mellifera) o avispa (Vespula spp o Polistes dominula)"],
        standardization: "El extracto alergénico está caracterizado por métodos inmunológicos y bioquímicos para asegurar un contenido consistente en alérgeno lote a lote y una potencia alergénica. Venom ATL se suministra en forma de extracto liofilizado y una vez reconstituido, la concentración de cada vial se expresa en mcg/ml."
      }
    },
    indications: "Tratamiento de las reacciones sistémicas por hipersensibilidad IgE mediada a veneno de abeja (Apis mellifera) o avispa (Vespula spp o Polistes dominula)",
    adminRoute: "Subcutánea",
    distribution: ["Alemania", "Italia", "España", "Polonia"],
    storage: {
      conditions: "Conservar en nevera entre 2 y 8º C. No congelar."
    },
    presentation: {
      inicio: {
        vialsDesc: "Tratamiento Inicial 1 vial con 550 mcg de veneno liofilizado por vial 1 vial con 9,0 ml de diluyente a base de albúmina sérica humana 10 viales con 1,8 ml de diluyente a base de albúmina sérica humana",
        table: []
      },
      continuacion: {
        vialsDesc: "Tratamiento de continuación 3-6 viales con 120 mcg de veneno liofilizado por vial 3-6 viales con 1,8 ml de diluyente a base de albúmina sérica humana Diluyente para efectuar series de diluciones (se sirve a petición) 10 viales con 1,8 ml por vial de albúmina sérica humana.",
        table: []
      }
    },
    dosage: {
      conventional: {
        initiation: [
          { vial: "0,1 mcg/ml", volume: "0,2", interval: "Semana 1" },
          { vial: "1 mcg/ml", volume: "0,05", interval: "Semana 2" },
          { vial: "1 mcg/ml", volume: "0,1", interval: "Semana 3" },
          { vial: "1 mcg/ml", volume: "0,2", interval: "Semana 4" },
          { vial: "1 mcg/ml", volume: "0,4", interval: "Semana 5" },
          { vial: "10 mcg/ml", volume: "0,05", interval: "Semana 6" },
          { vial: "10 mcg/ml", volume: "0,1", interval: "Semana 7" },
          { vial: "10 mcg/ml", volume: "0,2", interval: "Semana 8" },
          { vial: "10 mcg/ml", volume: "0,4", interval: "Semana 9" },
          { vial: "100 mcg/ml", volume: "0,05", interval: "Semana 10" },
          { vial: "100 mcg/ml", volume: "0,1", interval: "Semana 11" },
          { vial: "100 mcg/ml", volume: "0,2", interval: "Semana 12" },
          { vial: "100 mcg/ml", volume: "0,4", interval: "Semana 13" },
          { vial: "100 mcg/ml", volume: "0,6", interval: "Semana 14" },
          { vial: "100 mcg/ml", volume: "0,8", interval: "Semana 15" },
          { vial: "100 mcg/ml", volume: "1", interval: "Semana 16" }
        ],
        maintenance: [
          { vial: "100 mcg/mL", volume: "1,0", interval: "1 semana" }
        ]
      },
      cluster: {
        initiation: [],
        maintenance: []
      },
      alternative: {
        initiation: [],
        maintenance: []
      }
    },
    packageDuration: {
      initiation: "1 - 4 meses según la pauta.",
      continuation: "3 meses (3 viales) o 6 meses (6 viales)"
    }
  },
  {
    id: 60,
    name: "VENOMENHAL",
    manufacturer: "HAL ALLERGY",
    characteristics: "Preparación liofilizada de veneno de himenópteros: Abeja (Apis mellifera) o avispa (Vespula germanica, Vespula vulgaris). Mantener a temperatura entre 2 y 8ºC. No congelar el producto.",
    composition: {
      galenic: ["Principios activos: VENOMENHAL® Abeja (veneno de Apis mellifera) y VENOMENHAL® Avispa (veneno de Vespula germanica, Vespula vulgaris)", "Excipientes (producto reconstituido): Manitol, albúmina sérica humana, Cloruro sódico, Fenol y agua para inyección"],
      allergenic: {
        allergens: ["VENOMENHAL® Abeja: veneno de Apis mellifera.", "VENOMENHAL® Avispa: veneno de Vespula germanica y Vespula vulgaris"],
        standardization: "Extractos valorados en mcg/ml. 100 mcg son equivalentes a 100 VU"
      }
    },
    indications: "Inmunoterapia específica para pacientes con alergia a veneno de abeja o avispa IgE mediada",
    adminRoute: "Subcutánea",
    distribution: ["Holanda", "Alemania", "Austria", "Polonia", "Italia", "España", "Bélgica", "Luxemburgo", "Estonia", "Grecia", "Hungría", "Israel", "Japón", "Portugal", "Rumania", "Rusia", "Eslovenia"],
    storage: {
      conditions: "Mantener a temperatura entre 2 y 8ºC. No congelar el producto."
    },
    presentation: {
      inicio: {
        vialsDesc: "El envase de VENOMENHAL Abeja o VENOMENHAL Avispa contiene 6 viales de tapón perforable con 120 mcg de veneno de insecto puro liofilizado cada uno y 6 viales de tapón perforable con 1,2 ml de disolvente cada uno para disolver el veneno liofilizado. El envase de DISOLVENTE (disponible por separado) para la disolución del veneno liofilizado contiene 10 viales de tapón perforable con 4,5 ml de disolvente cada uno.",
        table: []
      },
      continuacion: {
        vialsDesc: "",
        table: []
      }
    },
    dosage: {
      conventional: {
        initiation: [
          { vial: "0,0001 mcg/ml", volume: "0,1", interval: "1ª DOSIS" },
          { vial: "0,001 mcg/ml", volume: "0,1", interval: "1 SEMANA" },
          { vial: "0,01 mcg/ml", volume: "0,1", interval: "1 SEMANA" },
          { vial: "0,1 mcg/ml", volume: "0,1", interval: "1 SEMANA" },
          { vial: "1 mcg/ml", volume: "0,05", interval: "1 SEMANA" },
          { vial: "1 mcg/ml", volume: "0,1", interval: "1 SEMANA" },
          { vial: "1 mcg/ml", volume: "0,2", interval: "1 SEMANA" },
          { vial: "1 mcg/ml", volume: "0,4", interval: "1 SEMANA" },
          { vial: "10 mcg/ml", volume: "0,05", interval: "1 SEMANA" },
          { vial: "10 mcg/ml", volume: "0,1", interval: "1 SEMANA" },
          { vial: "10 mcg/ml", volume: "0,2", interval: "1 SEMANA" },
          { vial: "10 mcg/ml", volume: "0,4", interval: "1 SEMANA" },
          { vial: "100 mcg/ml", volume: "0,05", interval: "1 SEMANA" },
          { vial: "100 mcg/ml", volume: "0,1", interval: "1 SEMANA" },
          { vial: "100 mcg/ml", volume: "0,2", interval: "1 SEMANA" },
          { vial: "100 mcg/ml", volume: "0,3", interval: "1 SEMANA" },
          { vial: "100 mcg/ml", volume: "0,4", interval: "1 SEMANA" },
          { vial: "100 mcg/ml", volume: "0,5", interval: "1 SEMANA" },
          { vial: "100 mcg/ml", volume: "0,6", interval: "1 SEMANA" },
          { vial: "100 mcg/ml", volume: "0,7", interval: "1 SEMANA" },
          { vial: "100 mcg/ml", volume: "0,8", interval: "1 SEMANA" },
          { vial: "100 mcg/ml", volume: "1", interval: "1 SEMANA" }
        ],
        maintenance: []
      },
      cluster: {
        initiation: [
          { vial: "100 mcg/ml", volume: "0,1", interval: "DÍA 0 (30 minutos)" },
          { vial: "100 mcg/ml", volume: "0,2", interval: "DÍA 0 (30 minutos)" },
          { vial: "100 mcg/ml", volume: "0,2", interval: "DÍA 0 (30 minutos)" },
          { vial: "100 mcg/ml", volume: "0,5", interval: "DÍA 7 (30 minutos)" },
          { vial: "100 mcg/ml", volume: "0,5", interval: "DÍA 7" }
        ],
        maintenance: [
          { vial: "100 mcg/ml", volume: "1", interval: "1 mes" }
        ]
      },
      alternative: {
        initiation: [],
        maintenance: []
      }
    },
    packageDuration: {
      initiation: "Duración variable en función de la pauta",
      continuation: "6 meses"
    }
  }
];

    

