import "./ListCases.css"

function ListCase () {

  const webList = [
    { id: 1, name: 'Qira', url: 'https://www.ejemplo1.com', image: "https://iimgvjzkjpogzlreaoya.supabase.co/storage/v1/object/sign/justmkt/qira.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJqdXN0bWt0L3FpcmEucG5nIiwiaWF0IjoxNzAxMjMyMjc0LCJleHAiOjE3MzI3NjgyNzR9.WZOtn_xN5TgEMxbHVOp2cxosAhKpO2mpXmJNGgt9IbQ&t=2023-11-29T04%3A31%3A14.691Z" },
    { id: 2, name: 'Runran', url: 'https://www.ejemplo2.com', image:"https://iimgvjzkjpogzlreaoya.supabase.co/storage/v1/object/sign/justmkt/runran.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJqdXN0bWt0L3J1bnJhbi5wbmciLCJpYXQiOjE3MDEyMzQ1NTAsImV4cCI6MTczMjc3MDU1MH0.OjzOLNDwne8z87GautAb5cfd4JJmMfB0k-7fSGd3sBk&t=2023-11-29T05%3A09%3A10.559Z"},
    { id: 3, name: 'Magic Donuts', url: 'https://www.ejemplo3.com', image:"https://iimgvjzkjpogzlreaoya.supabase.co/storage/v1/object/sign/justmkt/magicdonuts.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJqdXN0bWt0L21hZ2ljZG9udXRzLnBuZyIsImlhdCI6MTcwMTIzNDg4NCwiZXhwIjoxNzMyNzcwODg0fQ._UO_hPtslbGCJKZ7dDDemLlzs56xbDOixXzA08Yptz0&t=2023-11-29T05%3A14%3A44.393Z" },
    { id: 4, name: 'Vaccine', url: 'https://www.ejemplo3.com', image:"https://iimgvjzkjpogzlreaoya.supabase.co/storage/v1/object/sign/justmkt/mediacla.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJqdXN0bWt0L21lZGlhY2xhLnBuZyIsImlhdCI6MTcwMTIzNTA3MywiZXhwIjoxNzMyNzcxMDczfQ.MwvzIh-nzIG3uc9VEucsYIjUst1LsEtj0eUJEcYUF00&t=2023-11-29T05%3A17%3A53.319Z" },
    { id: 5, name: 'Vaccine', url: 'https://www.ejemplo3.com', image:"https://iimgvjzkjpogzlreaoya.supabase.co/storage/v1/object/sign/justmkt/camacintra.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJqdXN0bWt0L2NhbWFjaW50cmEucG5nIiwiaWF0IjoxNzAxMzE3NDY1LCJleHAiOjE3MzI4NTM0NjV9.jrKnZLEXJQepFRU7-lD6apkmHwITlHt57xXYxXpewyU&t=2023-11-30T04%3A11%3A05.435Z" },
    { id: 6, name: 'Vaccine', url: 'https://www.ejemplo3.com', image:"https://iimgvjzkjpogzlreaoya.supabase.co/storage/v1/object/sign/justmkt/medicos.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJqdXN0bWt0L21lZGljb3MucG5nIiwiaWF0IjoxNzAxMzE3ODE4LCJleHAiOjE3MzI4NTM4MTh9.VFRwW0FOGAxRWGJSE0nVryFO4DLBwcVPTcaGxvgaUtI&t=2023-11-30T04%3A16%3A58.208Z" },
    { id: 7, name: 'Vaccine', url: 'https://www.ejemplo3.com', image:"https://iimgvjzkjpogzlreaoya.supabase.co/storage/v1/object/sign/justmkt/utbc.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJqdXN0bWt0L3V0YmMucG5nIiwiaWF0IjoxNzAxMzIxMTUzLCJleHAiOjE3MzI4NTcxNTN9.kf24uxeynH6stApGx751GURt-UF2B7dFkLYbBh2dKh0&t=2023-11-30T05%3A12%3A33.312Z" }
  ];

  const logoFolio = [
    { id: 1, name: 'Qira', url: 'https://www.ejemplo1.com', image: "https://iimgvjzkjpogzlreaoya.supabase.co/storage/v1/object/sign/justmkt/tekton.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJqdXN0bWt0L3Rla3Rvbi5wbmciLCJpYXQiOjE3MDEzMjE5MzUsImV4cCI6MTczMjg1NzkzNX0._bBxx9O7N3aYvXkVJEwKk1iaZ1P1ORX25JCFj2y9Wfk&t=2023-11-30T05%3A25%3A35.863Z" },
    { id: 2, name: 'Qira', url: 'https://www.ejemplo1.com', image: "https://iimgvjzkjpogzlreaoya.supabase.co/storage/v1/object/sign/justmkt/tinket.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJqdXN0bWt0L3RpbmtldC5wbmciLCJpYXQiOjE3MDEzMjIxNjEsImV4cCI6MTczMjg1ODE2MX0.JCUk04L62zYHvDOPpiodPKA1lDIvB6pP5yGvxNcFC1s&t=2023-11-30T05%3A29%3A21.349Z" },
    { id: 2, name: 'Qira', url: 'https://www.ejemplo1.com', image: "https://iimgvjzkjpogzlreaoya.supabase.co/storage/v1/object/sign/justmkt/bym.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJqdXN0bWt0L2J5bS5wbmciLCJpYXQiOjE3MDEzMjIyNzQsImV4cCI6MTczMjg1ODI3NH0.kfXrijmZYi6-WF3I_zXjvxG-B96gg3e3FpIvIC29af8&t=2023-11-30T05%3A31%3A15.016Z" },
    { id: 2, name: 'Qira', url: 'https://www.ejemplo1.com', image: "https://iimgvjzkjpogzlreaoya.supabase.co/storage/v1/object/sign/justmkt/labor.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJqdXN0bWt0L2xhYm9yLnBuZyIsImlhdCI6MTcwMTMyMjM1MywiZXhwIjoxNzMyODU4MzUzfQ.oGETOkOUyLbSNfWTmdUQ1BKKkL_ndwiTy_-k5kxhbIQ&t=2023-11-30T05%3A32%3A33.444Z" },
    { id: 2, name: 'Qira', url: 'https://www.ejemplo1.com', image: "https://iimgvjzkjpogzlreaoya.supabase.co/storage/v1/object/sign/justmkt/code.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJqdXN0bWt0L2NvZGUucG5nIiwiaWF0IjoxNzAxMzIyNDY3LCJleHAiOjE3MzI4NTg0Njd9.SQklBIetDrhBtzeVs6BtQFkL2B4z7ET9ZJe-Ln2irUs&t=2023-11-30T05%3A34%3A27.890Z" },
    { id: 2, name: 'Qira', url: 'https://www.ejemplo1.com', image: "https://iimgvjzkjpogzlreaoya.supabase.co/storage/v1/object/sign/justmkt/es.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJqdXN0bWt0L2VzLnBuZyIsImlhdCI6MTcwMTMyMjU1OCwiZXhwIjoxNzMyODU4NTU4fQ.7sKCoYnNzqxOlqmycn7RqQlCx4x4VBI-S5dR0Kk-0Wc&t=2023-11-30T05%3A35%3A58.566Z" },
    { id: 2, name: 'Qira', url: 'https://www.ejemplo1.com', image: "https://iimgvjzkjpogzlreaoya.supabase.co/storage/v1/object/sign/justmkt/era.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJqdXN0bWt0L2VyYS5wbmciLCJpYXQiOjE3MDEzMjI2MjUsImV4cCI6MTczMjg1ODYyNX0.RSH6UGldhCS00jpYOVIVC_8Bad5UOdkVL3HETCVuYIM&t=2023-11-30T05%3A37%3A05.213Z" },
    { id: 2, name: 'Qira', url: 'https://www.ejemplo1.com', image: "https://iimgvjzkjpogzlreaoya.supabase.co/storage/v1/object/sign/justmkt/bizz.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJqdXN0bWt0L2JpenoucG5nIiwiaWF0IjoxNzAxMzIyNjk2LCJleHAiOjE3MzI4NTg2OTZ9.UI92cnCZfGFr7ELCTKMTVxgS3oA5NHf8M2ImhxdRpF0&t=2023-11-30T05%3A38%3A17.113Z" },
    { id: 2, name: 'Qira', url: 'https://www.ejemplo1.com', image: "https://iimgvjzkjpogzlreaoya.supabase.co/storage/v1/object/sign/justmkt/dirt.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJqdXN0bWt0L2RpcnQucG5nIiwiaWF0IjoxNzAxMzIyODEyLCJleHAiOjE3MzI4NTg4MTJ9.0fV4Y9dCvxT4N-ebkV4UaNITQY7Bbije3jMUN7xUYNI&t=2023-11-30T05%3A40%3A12.310Z" },
    { id: 2, name: 'Qira', url: 'https://www.ejemplo1.com', image: "https://iimgvjzkjpogzlreaoya.supabase.co/storage/v1/object/sign/justmkt/rent.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJqdXN0bWt0L3JlbnQucG5nIiwiaWF0IjoxNzAxMzIyODk4LCJleHAiOjE3MzI4NTg4OTh9.xCImJjiILhkIKFrZs3GxHigmdW95moL_rRLRqIgDnDk&t=2023-11-30T05%3A41%3A38.942Z" },




  ]


  return (
    <div className="projects">
      <h2>Casos de estudio</h2>
      <div className="projects__inframe">
        <iframe src="https://www.behance.net/embed/project/134671939?ilo0=1" height="316" width="404" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>
        <iframe src="https://www.behance.net/embed/project/128282697?ilo0=1" height="316" width="404" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>
        <iframe src="https://www.behance.net/embed/project/125447657?ilo0=1" height="316" width="404" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>
      </div>
      <div projects>
      <h2>Sitios Web Recientes</h2>
      <div className="projects__inframe--web">
        {webList.map((web) => (
          <a href={web.url} target="_blank">
            <div id={web.id} style={{ backgroundImage: `url(${web.image})` }} className="project__web">
              
            </div>
          </a>
        ))}
      </div>
      </div>
      <h2>Logofolio</h2>
      <div className="projects__inframe">
      {logoFolio.map((logo) => (
            <div id={logo.id} style={{ backgroundImage: `url(${logo.image})` }} className="project__web--logo">
            </div>
        ))}
      </div>
    </div>
  )
}

export default ListCase;