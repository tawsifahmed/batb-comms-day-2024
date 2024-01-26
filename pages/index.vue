<template>
  <main class="flex flex-col justify-between w-full h-screen p-6" id="home">
    <div class="flex justify-end">
      <!-- <img
        src="~assets/robi-logo.png"
        alt=""
        style="width: 80px; height: auto"
      /> -->
    </div>

    <!-- <div class="w-full" v-if="!submitted">
      <p class="mb-1 text-xl font-bold text-center text-white">Your ID</p>
      <input
        type="text"
        class="w-full p-3 text-black border border-black rounded-md"
        v-model="employee_id"
      />
    </div> -->

    <div class="w-full text-center" v-if="!submitted">
      <h1 class="mb-3 text-5xl">Press &amp; Hold to Unveil</h1>
      <!-- <p class="text-2xl">The New Age of Business</p> -->
    </div>
    <div class="w-full text-center" v-else>
      <h1 class="text-5xl">Thank you for participating.</h1>
    </div>

    <div class="flex justify-center pb-16 select-none">
      <div
        id="tap"
        style="width: 220px; height: 220px"
        class="relative flex items-center justify-center select-none"
        v-if="!submitted"
      >
        <div
          class="absolute select-none"
          style="
            width: 220px;
            height: 220px;
            background-size: contain;
            background-repeat: no-repeat;
          "
          :style="`background-image: url(${require(`~/assets/layer-1.png`)})`"
        ></div>
        <div
          class="absolute select-none spin"
          style="
            width: 220px;
            height: 220px;
            background-size: contain;
            background-repeat: no-repeat;
          "
          :style="`background-image: url(${require(`~/assets/layer-2.png`)})`"
        ></div>
        <div
          class="absolute select-none reverse-spin"
          style="
            width: 220px;
            height: 220px;
            background-size: contain;
            background-repeat: no-repeat;
          "
          :style="`background-image: url(${require(`~/assets/layer-3.png`)})`"
        ></div>
        <div
          class="absolute select-none spin"
          style="
            width: 220px;
            height: 220px;
            background-size: contain;
            background-repeat: no-repeat;
          "
          :style="`background-image: url(${require(`~/assets/layer-4.png`)})`"
        ></div>
        <div
          class="absolute select-none animate-pulse"
          style="
            width: 220px;
            height: 220px;
            background-size: contain;
            background-repeat: no-repeat;
          "
          :style="`background-image: url(${require(`~/assets/layer-5.png`)})`"
        ></div>

        <svg
          v-if="touched"
          version="1.1"
          class="absolute select-none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="195px"
          height="195px"
          viewBox="0 0 175 175"
          enable-background="new 0 0 200 200"
          xml:space="preserve"
        >
          <path
            id="circle"
            fill="none"
            stroke-width="3"
            stroke-miterlimit="10"
            d="M87.8,12c41.6,0.2,75.2,33.9,75.2,75.5c0,41.7-33.8,75.5-75.5,75.5S12,129.2,12,87.5
	S45.8,12,87.5,12"
          />
        </svg>
      </div>
    </div>

    <div
      class="absolute bottom-0 left-0 w-full h-screen"
      v-if="submitted"
      style="
        background-image: url(/confetti.gif);
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
      "
    ></div>
  </main>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

export default {
  data() {
    return {
      submitted: false,
      touched: false,
      timeout: null,
      employee_id: null,
      all_employees: [
        {
          name: 'MD ZIAUL HAQUE BHUIYAN',
          id: 'LM03',
        },
        {
          name: 'Imran Kadir',
          id: 'LM01',
        },
        {
          name: 'Kazi Fahad',
          id: 'LM18',
        },
        {
          name: 'Seyed Mosayeb Alam Eikiyo',
          id: 'LM02',
        },
        {
          name: 'Kudrat E Ebtihaz Joy',
          id: 'LM10',
        },
        {
          name: 'M Kamrul Islam Chowdhury',
          id: 'LM13',
        },
        {
          name: 'Erfan Haque',
          id: 'LM16',
        },
        {
          name: 'Eazaz Mohammed',
          id: 'LM06',
        },
        {
          name: 'Tahsin Azim Shezan',
          id: 'LM04',
        },
        {
          name: 'Abdullah Safi',
          id: 'LM12',
        },
        {
          name: 'Fatema Akhter Naz',
          id: 'LM19',
        },
        {
          name: 'Tasnuva Ahmed',
          id: 'LM09',
        },
        {
          name: 'Arefeen Raafi Ahmed',
          id: 'LM07',
        },
        {
          name: 'Areez Afsar Khan',
          id: 'LM14',
        },
        {
          name: 'Md. Azazul Hasan Khan',
          id: 'LM21',
        },
        {
          name: 'Md Altamis Nabil',
          id: 'LM20',
        },
        {
          name: 'Rezwan Ul Haque',
          id: 'LM22',
        },
        {
          name: 'Shaan Shahed',
          id: 'LM15',
        },
        {
          name: 'Shovona Shahid',
          id: 'LM45',
        },
        {
          name: "Steve Benedict D'Silva",
          id: 'LM27',
        },
        {
          name: 'Senator S. M. Tanveer Saad Akash',
          id: 'LM69',
        },
        {
          name: 'Md. Fazle Munim',
          id: 'LM23',
        },
        {
          name: 'Rezwanur Rahman',
          id: 'LM36',
        },
        {
          name: 'Nazmul Hossain',
          id: 'LM05',
        },
        {
          name: 'Shakhawat Hossain',
          id: 'LM26',
        },
        {
          name: 'Wolora Afrin Rasna',
          id: 'LM35',
        },
        {
          name: 'Fahim Ahmed',
          id: 'LM25',
        },
        {
          name: 'Taha Yeasin Ramadan',
          id: 'LM11',
        },
        {
          name: 'S M Muqtadirul Huq',
          id: 'LM31',
        },
        {
          name: 'Abu Farhan',
          id: 'LM17',
        },
        {
          name: 'Habibur Rahman Jewel',
          id: 'LM32',
        },
        {
          name: 'Mahdi Salehin',
          id: 'LM34',
        },
        {
          name: 'Md Elias Mollah',
          id: 'LM30',
        },
        {
          name: 'Jahangir Alam',
          id: 'LM28',
        },
        {
          name: 'Shafquat Husain',
          id: 'LM29',
        },
        {
          name: 'Mahira Habib',
          id: 'LM24',
        },
        {
          name: 'Irfan Uddin',
          id: 'LM51',
        },
        {
          name: 'Sk Motiur Rahman',
          id: 'LM52',
        },
        {
          name: 'MD FAHIM REZA',
          id: 'LM110',
        },
        {
          name: 'SAMIHA AKHTER',
          id: 'LM53',
        },
        {
          name: 'Salehin F Nahian',
          id: 'LM111',
        },
        {
          name: 'M Asif Rahman',
          id: 'LM54',
        },
        {
          name: 'Sabbir Ahmed',
          id: 'LM56',
        },
        {
          name: 'Md.Khalid Bin Mahbub',
          id: 'LM112',
        },
        {
          name: 'Md. Shamsul Arefin',
          id: 'LM113',
        },
        {
          name: 'Arman Kabir',
          id: 'LM114',
        },
        {
          name: 'Saiful Osman',
          id: 'LM115',
        },
        {
          name: 'Jobayer Ahmed',
          id: 'LM116',
        },
        {
          name: 'Md.Wahidur Rahman',
          id: 'LM117',
        },
        {
          name: 'Kazi Bashir Ahmed',
          id: 'LM118',
        },
        {
          name: 'MD TANVIR KHAN',
          id: 'LM119',
        },
        {
          name: 'Ziaur Rahman',
          id: 'LM120',
        },
        {
          name: 'Abed Ahsan Sagar',
          id: 'LM121',
        },
        {
          name: 'Arifur Rahman',
          id: 'LM122',
        },
        {
          name: 'MD.Yousuf',
          id: 'LM161',
        },
        {
          name: 'Amzad Mahmud',
          id: 'LM124',
        },
        {
          name: 'Sheikh Ashikuzzaman',
          id: 'LM68',
        },
        {
          name: 'Humayun Kabir Robel',
          id: 'LM125',
        },
        {
          name: 'Azwad Farhan Ridwan',
          id: 'LM126',
        },
        {
          name: 'Mohammad Mahmudur Rahman',
          id: 'LM59',
        },
        {
          name: 'Kazi Afif Zaman Reza',
          id: 'LM127',
        },
        {
          name: 'Sanjid Rahman Choudhury',
          id: 'LM128',
        },
        {
          name: 'Md Nahid Hasan Kaysar',
          id: 'LM129',
        },
        {
          name: 'Md. Mosharof Hossain Akhand',
          id: 'LM130',
        },
        {
          name: 'MD SAYEEDUR RAHMAN',
          id: 'LM131',
        },
        {
          name: 'Saidur Mamun Khan',
          id: 'LM132',
        },
        {
          name: 'Mohammed Asraf Uddin',
          id: 'LM133',
        },
        {
          name: 'ZOBAYER MOHSIN KABIR',
          id: 'LM134',
        },
        {
          name: 'Khandker Nayemul Hassan',
          id: 'LM62',
        },
        {
          name: 'Manowar Kamal Zishan',
          id: 'LM135',
        },
        {
          name: 'Faisal Siddiquee',
          id: 'LM136',
        },
        {
          name: 'ZAKARIA AHMED',
          id: 'LM137',
        },
        {
          name: 'Umar Saif Riday',
          id: 'LM138',
        },
        {
          name: 'Md Saiful Islam Chowdhury',
          id: 'LM140',
        },
        {
          name: 'Tasnuva Aslam',
          id: 'LM141',
        },
        {
          name: 'Md Altap Hossen',
          id: 'LM142',
        },
        {
          name: 'Md. Nazrul Islam Chowdhury FCS',
          id: 'LM143',
        },
        {
          name: 'Fahim Hassan',
          id: 'LM144',
        },
        {
          name: 'Yaminur Rahman',
          id: 'LM145',
        },
        {
          name: 'Ashik Rahman Rifat',
          id: 'LM146',
        },
        {
          name: 'HAMEEM HASAN JOEY',
          id: 'LM55',
        },
        {
          name: 'Sayeida Redwana Hasan',
          id: 'LM147',
        },
        {
          name: 'Ahmed Mostahsan',
          id: 'LM148',
        },
        {
          name: 'Md Ibne Arafat Mazumder',
          id: 'LM149',
        },
        {
          name: 'Sakif Nazran Bhuiyan',
          id: 'LM150',
        },
        {
          name: 'Rajendra Kumar',
          id: 'LM151',
        },
        {
          name: 'Rabeya Nasir Ovi',
          id: 'LM58',
        },
        {
          name: 'Md Takib Hossain',
          id: 'LM152',
        },
        {
          name: 'Khondker Nasif Akhter',
          id: 'LM153',
        },
        {
          name: 'Kazi Imtiaz Ibne Mahtab',
          id: 'LM154',
        },
        {
          name: 'Shadman Bin Samad',
          id: 'LM155',
        },
        {
          name: 'A K M Ahsanur Rahman Mallik Rony',
          id: 'LM156',
        },
        {
          name: 'Asish Kumar Modi',
          id: 'LM157',
        },
        {
          name: 'Adnan Zaman',
          id: 'LM158',
        },
        {
          name: 'Jannat Ara mukta',
          id: 'LM60',
        },
        {
          name: 'Khan Md Moshiur Rahman',
          id: 'LM159',
        },
        {
          name: 'OMAR FAROUK',
          id: 'LM160',
        },
        {
          name: 'Raihan Akbor Tutul',
          id: 'LM66',
        },
        {
          name: 'NOOR MOHAMMAD ABU RAIHAN',
          id: 'LM123',
        },
        {
          name: 'Masrur Mahmood Shuvo',
          id: 'LM162',
        },
        {
          name: 'ALL SHARIER',
          id: 'LM61',
        },
        {
          name: 'Chanchal Kumar Saha',
          id: 'LM163',
        },
        {
          name: 'Risadur Rahman',
          id: 'LM164',
        },
        {
          name: 'Md Iqbal Elahi khan',
          id: 'LM64',
        },
        {
          name: 'Mohammad Eliyas',
          id: 'LM165',
        },
        {
          name: 'Shahidullah',
          id: 'LM166',
        },
        {
          name: 'Mursalin Ahmad',
          id: 'LM167',
        },
        {
          name: 'Md Arafat Kabir',
          id: 'LM168',
        },
        {
          name: 'Abdullah Al Rashid',
          id: 'LM169',
        },
        {
          name: 'Ahasanul Haque',
          id: 'LM170',
        },
        {
          name: 'Sazzad Hossain',
          id: 'LM171',
        },
        {
          name: 'Abu Naser Mohammad Mohsin',
          id: 'LM63',
        },
        {
          name: 'Junaid Ahmed Rahat',
          id: 'LM172',
        },
        {
          name: 'SHAHIDUL MOSTAFA CHOWDHURY MIZAN',
          id: 'LM173',
        },
        {
          name: 'Romana Akther Eity',
          id: 'LM174',
        },
        {
          name: 'MD FORHAD HOSSAIN',
          id: 'LM175',
        },
        {
          name: 'Sadique Hasan',
          id: 'LM176',
        },
        {
          name: 'Sharmin Hossain',
          id: 'LM70',
        },
        {
          name: 'Fariya Akbar Riya',
          id: 'LM177',
        },
        {
          name: 'Mohammad Salah Uddin',
          id: 'LM178',
        },
        {
          name: 'Rafaelur Rahman Mehedi',
          id: 'LM65',
        },
        {
          name: 'Shubrata Mallik Manash',
          id: 'LM179',
        },
        {
          name: 'Syeda Sabera Arefin (Juthika)',
          id: 'LM50',
        },
        {
          name: 'Md. Fahim Haider',
          id: 'LM180',
        },
        {
          name: 'Muntasir Azgar',
          id: 'LM181',
        },
        {
          name: 'Arifin Bin Mahbub',
          id: 'LM182',
        },
        {
          name: 'Nur Mohammad Riyad',
          id: 'LM243',
        },
        {
          name: 'Samia Rahman',
          id: 'LM183',
        },
        {
          name: 'Barrister SM Abidur Rahman',
          id: 'LM244',
        },
        {
          name: 'Md Mohsin',
          id: 'LM184',
        },
        {
          name: 'Md. Asaduzzaman Sagar',
          id: 'LM185',
        },
        {
          name: 'Dr.Rezaul karim',
          id: 'LM186',
        },
        {
          name: 'MD Nayem Hossain Shakil',
          id: 'LM187',
        },
        {
          name: 'Mohammad Ilmul Haque',
          id: 'LM188',
        },
        {
          name: 'Ibrahim Khalil Foysal',
          id: 'LM189',
        },
        {
          name: 'Mohammed Shamsul Arefin Mishu',
          id: 'LM190',
        },
        {
          name: 'Md Mahbub Alam',
          id: 'LM191',
        },
        {
          name: 'MD FAKHRUL ALAM Mukul',
          id: 'LM57',
        },
        {
          name: 'MARILIN FARZANA AHMED',
          id: 'LM192',
        },
        {
          name: 'Asfaqur Rahman',
          id: 'LM193',
        },
        {
          name: 'Suhana Islam',
          id: 'LM194',
        },
        {
          name: 'Md Abdun Noor',
          id: 'LM195',
        },
        {
          name: 'Samia Tahsin',
          id: 'LM196',
        },
        {
          name: 'Omar Hossain',
          id: 'LM197',
        },
        {
          name: 'Sandip Datta',
          id: 'LM198',
        },
        {
          name: 'Taufiq uz Zaman',
          id: 'LM199',
        },
        {
          name: 'Raihatul Zannah',
          id: 'LM200',
        },
        {
          name: 'Shafiuddin Ala Raju',
          id: 'LM201',
        },
        {
          name: 'Muntasir Mamun',
          id: 'LM67',
        },
        {
          name: 'Khandaker Rajib Hasan',
          id: 'LM202',
        },
        {
          name: 'Iritra Sharif',
          id: 'LM203',
        },
        {
          name: 'ERASHAD HASSAN',
          id: 'LM204',
        },
        {
          name: 'Md Rasel',
          id: 'LM205',
        },
        {
          name: 'Tukhbita Afroz Nawmi',
          id: 'LM206',
        },
        {
          name: 'Farhana rahman urmi',
          id: 'LM207',
        },
        {
          name: 'Mohsin ahammad',
          id: 'LM208',
        },
        {
          name: 'Md Solaman Hakim',
          id: 'LM209',
        },
        {
          name: 'MD ZIAUR RAHMAN',
          id: 'LM210',
        },
        {
          name: 'Suman Saha',
          id: 'LM211',
        },
        {
          name: 'Hassan Imam Bhuiyan',
          id: 'LM212',
        },
        {
          name: 'Osama Mainul Islam Bhuiya',
          id: 'LM213',
        },
        {
          name: 'Sumaiya Tabassum Haque',
          id: 'LM214',
        },
        {
          name: 'Mohammad Delwar Hossain',
          id: 'LM215',
        },
        {
          name: 'Md Salauddin Yousuf',
          id: 'LM216',
        },
        {
          name: 'Noor-E-Ashrafi',
          id: 'LM217',
        },
        {
          name: 'Kandokar Md Filckul Ahmed',
          id: 'LM218',
        },
        {
          name: 'Md Firoz Alam Sumon',
          id: 'LM219',
        },
        {
          name: 'Ashraf Hossain',
          id: 'LM220',
        },
        {
          name: 'Mohammad Ismail (munna)',
          id: 'LM221',
        },
        {
          name: 'Md. Alamin Mayhraj Bappi.',
          id: 'LM222',
        },
        {
          name: 'Rebeka Sultana Binti',
          id: 'LM223',
        },
        {
          name: 'Md Morshedul Hasan',
          id: 'LM224',
        },
        {
          name: 'A F M Anamul Haque',
          id: 'LM225',
        },
        {
          name: 'Arman ibne Masud',
          id: 'LM226',
        },
        {
          name: 'S.M.Belal Uddin',
          id: 'LM227',
        },
        {
          name: 'Safat Maksud Omye',
          id: 'LM228',
        },
        {
          name: 'Noor E Alam Bhuiyan',
          id: 'LM77',
        },
        {
          name: 'MD Faijannur',
          id: 'LM229',
        },
        {
          name: 'MD ABDULLAH AL RAZIB',
          id: 'LM230',
        },
        {
          name: 'Sinan Arefeen',
          id: 'LM231',
        },
        {
          name: 'K M MEZBAH RAHMAN',
          id: 'LM232',
        },
        {
          name: 'Zafir Shafiee Chowdhury',
          id: 'LM71',
        },
        {
          name: 'Shoaib Bin Noor',
          id: 'LM233',
        },
        {
          name: 'Ishrat Sharmin Shimu',
          id: 'LM72',
        },
        {
          name: 'Abid Ashraf',
          id: 'LM234',
        },
        {
          name: 'Shaylin Zaman Akbar',
          id: 'LM235',
        },
        {
          name: 'Rafael Mursalin',
          id: 'LM236',
        },
        {
          name: 'Shakila Yasmin',
          id: 'LM237',
        },
        {
          name: 'Abdul Malek Tushar',
          id: 'LM73',
        },
        {
          name: 'Nahida Akter',
          id: 'LM238',
        },
        {
          name: 'Raju ahammed',
          id: 'LM74',
        },
        {
          name: 'Syed Abdullah Shaon',
          id: 'LM75',
        },
        {
          name: 'Shaikh Shubarna Rosul',
          id: 'LM239',
        },
        {
          name: 'Md Parvaz Rana',
          id: 'LM76',
        },
        {
          name: 'Kazi An Noor Hossain',
          id: 'LM240',
        },
        {
          name: 'Mohammed Imran Shakha',
          id: 'LM241',
        },
        {
          name: 'Biplob Ghosh Rahul',
          id: 'LM78',
        },
        {
          name: 'Rasel Ahmed',
          id: 'LM79',
        },
        {
          name: 'Md. Kamruzzaman Pavel',
          id: 'LM242',
        },
        {
          name: 'Syeda Shah Gufta Naz',
          id: 'LM37',
        },
        {
          name: 'Muhammad Niaz Hasnat',
          id: 'LM245',
        },
        {
          name: 'GM Faruk Hossain',
          id: 'LM246',
        },
        {
          name: 'Kazi Motahazzad Billah',
          id: 'LM247',
        },
        {
          name: 'Md Shafayet Hassan',
          id: 'LM248',
        },
        {
          name: 'Dr. Md. Anamul Hoque',
          id: 'LM249',
        },
        {
          name: 'B M Jahid Hossain Maruf',
          id: 'LM101',
        },
        {
          name: 'Maruf Mustakim',
          id: 'LM251',
        },
        {
          name: 'Mashiat Noor',
          id: 'LM252',
        },
        {
          name: 'Md. Adnan',
          id: 'LM253',
        },
        {
          name: 'Md. Mahbubur Rahman Chowdhury',
          id: 'LM80',
        },
        {
          name: 'SUMAYA MAHMUD SHARNA',
          id: 'LM254',
        },
        {
          name: 'Md Navid Arefin khan',
          id: 'LM81',
        },
        {
          name: 'Shahmina Isha Mannan',
          id: 'LM255',
        },
        {
          name: 'Lisanul Hoque',
          id: 'LM256',
        },
        {
          name: 'Afshana Rahman',
          id: 'LM257',
        },
        {
          name: 'MD Saiful Rahman',
          id: 'LM258',
        },
        {
          name: 'Ashikul Islam Tamal',
          id: 'LM259',
        },
        {
          name: 'Md Nazmus Sakib',
          id: 'LM260',
        },
        {
          name: 'Tahreem Savraj Ali',
          id: 'LM261',
        },
        {
          name: 'A S M Raisul Hasan Shoaib',
          id: 'LM262',
        },
        {
          name: 'SAWRUP BARUA',
          id: 'LM263',
        },
        {
          name: 'N. M. Nokibul Hoque',
          id: 'LM264',
        },
      ],
    }
  },
  mounted() {
    document.addEventListener('contextmenu', function (e) {
      e.preventDefault()
    })

    let that = this

    document
      .getElementById('tap')
      .addEventListener('contextmenu', (e) => e.preventDefault())
    document.getElementById('tap').addEventListener('touchstart', function () {
      that.touched = true

      that.timeout = setTimeout(() => {
        that.countUp()
      }, 2900)
    })
    document.getElementById('tap').addEventListener('touchend', function () {
      that.touched = false
      clearTimeout(that.timeout)
    })
  },
  methods: {
    drag() {
      console.log('dragged')
    },
    async countUp() {
      await firebase
        .firestore()
        .collection('counts')
        .doc('count')
        .update({
          count: firebase.firestore.FieldValue.increment(1),
        })
        .then(() => {
          this.submitted = true
        })
        .catch((error) => {
          this.err = error
        })
    },
  },
}
</script>

<style>
#home {
  @apply text-white;
  background-image: url(~assets/BAT-COMS-DAY-02.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  /* background: #221c52; */
}

#circle {
  fill: transparent;
  stroke: darkgreen;
  stroke-width: 10px;
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: clock-animation 6s linear infinite;
}
@keyframes clock-animation {
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
}
</style>
