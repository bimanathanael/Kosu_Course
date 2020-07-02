'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * return queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Chapters', [
      {
        name: 'Chapter 1 : Belajar Angka',
        content: "0=ree,1=ich,2=ni,3=san,4=yon,5=go",
        CourseId : 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        name: 'Chapter 2 : Belajar Alphabet',
        content: "A=Ze,I=Zo,U=Ja,E=Ju,O=Jo",
        CourseId : 1,
        createdAt : new Date(),
        updatedAt : new Date()
     },{
        name: 'Chapter 1 : Belajar Lagu Kebangsaan Kimigayo',
        content: "Kimigayo wa Chiyo ni, yachiyo ni Sazare-ishi no Iwao to narite Koke no musu made ",
        CourseId : 2,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        name: 'Chapter 2 : Belajar Pakaian Adat Kimono',
        content: "Kimono adalah pakaian adat Jepang yang sudah sangat dikenali oleh semua orang di kancah internasional. Kimono sejatinya merupakan pakaian sehari-hari orang Jepang zaman dahulu. Kimono kerap kali dipakai saat acara pernikahan, upacara teh, acara tradisional formal, maupun upacara pemakaman. Kimono termahal biasanya adalah yang berbahan kain sutera. Yang termurah terbuat dari polyester.",
        CourseId : 2,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        name: 'Chapter 1 : Belajar Mengantri',
        content: "Dengan mengajarkan budaya antri akan membentuk karakter seseorang sehingga mereka akan lebih mudah untuk bersosialisasi di masyarakat ketika bersosialisasi. Pelajaran yang sangat berharga ini ini dapat diajarkan mulai dari usia balita.",
        CourseId : 3,
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        name: 'Chapter 2 : Belajar Hormat hormat ',
        content: "Setiap orang menginginkan untuk di hormati namun terkadang mereka lupa bagaimana cara menghormati orang lain. Jika kita mampu untuk menghormati orang lain terlebih dahulu, dengan sendirinya orang lain akan memberikan rasa hormatnya. Hal tersebut menjadi sebuah penghargaan untuk kita karena pemikiran kita terbuka atas semua perbedaan yang ada di setiap orang.",
        CourseId : 3,
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * return queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Chapters', null, {});
  }
};
