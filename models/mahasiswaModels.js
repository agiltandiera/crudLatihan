var sql = require('../db') //impor koneksi ke db di db

var Mahasiswa = () => { }

Mahasiswa.selectAllMahasiswa = (callback) => {
  sql.query('select * from mahasiswa', (err, res) => {
    if (err) {
      console.log(err)
      callback(err, null)
    } else {
      callback(null, res)
    }
  })
}

Mahasiswa.insertIntoMahasiswa = (newData, callback) => {
  sql.query('insert into mahasiswa set ?', { nim: newData.nim, nama: newData.nama }, (err, res) => {
    if (err) {
      console.log(err)
      callback(err, null)
    } else {
      callback(null, res)
    }
  })
}

Mahasiswa.selectMahasiswa = (id, callback) => {
  sql.query('select * from mahasiswa where id = ?', id, (err, res) => {
    if (err) {
      console.log(err)
      callback(err, null)
    } else {
      callback(null, res)
    }
  })
}

Mahasiswa.updateMahasiswa = (nama, nim, id, callback) => {
  sql.query('update mahasiswa set nim = ?, nama = ? where id = ? ',
    [nim, nama, id], (err, res) => {
      if (err) {
        console.log(err)
        callback(err, null)
      } else {
        callback(null, res)
      }
    })
}

Mahasiswa.deleteMahasiswa = (id, callback) => {
  sql.query('delete from mahasiswa where id = ?', id, (err, res) => {
    if (err) {
      console.log(err)
      callback(err, null)
    } else {
      callback(null, res)
    }
  })
}

module.exports = Mahasiswa

