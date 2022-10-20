export default  {
  users: [{
    id: 1,
    name: "John Doe",
    email: "john@noticeconnect.com",
    firm: 1
  },{
    id: 2,
    name: "Jane Doe",
    email: "jane@noticeconnect.com",
    firm: 1
  },{
    id: 3,
    name: "John Roe",
    email: "john.roe@noticeconnect.com",
    firm: 2
  }],
  firms: [{
    id: 1,
    name: "Doe Corp"
  }, {
    id: 2,
    name: "Roe Ltd"
  }],
  products: [{
    id: 1,
    name: "notice",
    price: 150
  }, {
    id: 2,
    name: "affidavit",
    price: 40
  }],
  transactions: [{
    id: 1,
    product: 1,
    user: 1,
    total: 150
  }, {
    id: 2,
    product: 1,
    user: 1,
    total:300
  }, { 
    id:3,
    product:2,
    user:2,
    total:120
  }, {
    id:4,
    product:1,
    user:3,
    total:450
  }, {
    id:5,
    product:2,
    user:3,
    total:40
  }, {
    id:6,
    product:2,
    user:1,
    total:80
  }]
},