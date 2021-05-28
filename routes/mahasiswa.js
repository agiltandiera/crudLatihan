var express = require('express');
var Mahasiswa = require('../models/mahasiswaModels')
var router = express.Router();
var db = require('../db')

/* GET users listing. */
//READ MAHASISWA
router.get('/', function (req, res, next) {
  Mahasiswa.selectAllMahasiswa((err, result) => {
    if (err)
      console.log(err)
    else
      res.render('listMahasiswa', { title: 'Daftar Mahasiswa', data: result })
  })
  // res.send('respond with a resource');
});

//CREATE MAHASISWA
router.get('/tambah', (req, res, next) => {
  res.render('addMahasiswa', { title: 'Tambah Mahasiswa' })
})

router.post('/tambah', (req, res) => {
  Mahasiswa.insertIntoMahasiswa(req.body, (err, result) => {
    if (err)
      console.log(err)
    else
      console.log(result)
  })
  res.redirect('/mahasiswa')
})

//UPDATE MAHASISWA
router.get('/:id/edit', (req, res, next) => {
  Mahasiswa.selectMahasiswa(req.params.id, (err, result) => {
    console.log('idnya : ' + req.params.id)
    console.log(req.body)
    let data = result[0]
    if (err) {
      console.log(err)
    }
    else {
      console.log(result)
      res.render('editMahasiswa', { title: 'Edit Data Mahasiswa', data })
    }
  })
})
router.post('/:id/edit', (req, res) => {
  Mahasiswa.updateMahasiswa(req.body.nama, req.body.nim, req.params.id, (err, result) => {
    if (err) {
      console.log(err)
    }
    else {
      console.log(result)
      res.redirect('/mahasiswa')
    }
  })
})

//DELETE MAHASISWA
router.get('/:id/hapus', (req, res) => {
  Mahasiswa.deleteMahasiswa(req.params.id, (err, result) => {
    res.redirect('/mahasiswa')
  })
})

module.exports = router;
