import {
  AccountBalance,
  Work,
  LocalHospital,
  School,
  DirectionsBus,
  ShoppingCart,
} from "@mui/icons-material";

export const onboardingData = [
  {
    key: "banking",
    icon: AccountBalance,
    title: "Banking",
    cardcontent: [
      {
        id: 1,
        onboardingTitle: "Bank of America - Student Advantage",
        onboardingInfo:
          "Bank of America's Student Advantage account is designed for students aged 16-24 and offers no monthly fees, access to over 16,000 ATMs nationwide, and the ability to manage your finances on the go through mobile banking. Plus, students can earn rewards with the BankAmeriDeals program. This account also provides discounts on various services and perks like free online bill pay. Learn more about the program and apply here: [Bank of America Student Advantage](https://www.bankofamerica.com/student/).",
      },
      {
        id: 2,
        onboardingTitle: "Chase College Checking Account",
        onboardingInfo:
          "The Chase College Checking account is a great option for students who want to keep their finances simple while enjoying the benefits of a large bank's extensive ATM network and online banking services. This account has no monthly service fee as long as you're enrolled in school and provides access to over 16,000 ATMs. You can also earn cash back with Chase's Ultimate Rewards program. Find out more and apply here: [Chase College Checking](https://www.chase.com/personal/checking/college-checking).",
      },
      {
        id: 3,
        onboardingTitle: "Wells Fargo College Combo",
        onboardingInfo:
          "Wells Fargo offers the College Combo account, which combines a checking account with a savings account to help you manage your funds more effectively. The College Combo is designed specifically for students, with no monthly fees as long as you're enrolled in school. It also offers mobile banking, easy access to over 13,000 ATMs, and special offers for students. Plus, you can set up automatic savings and get personalized budgeting tips through Wells Fargo's online tools. Learn more here: [Wells Fargo College Combo](https://www.wellsfargo.com/student/).",
      },
      {
        id: 4,
        onboardingTitle: "Local Credit Unions - Better Rates",
        onboardingInfo:
          "Credit unions are often overlooked but can be a great option for students due to their competitive interest rates, lower fees, and more personalized service. Many local credit unions offer student checking and savings accounts with benefits like no monthly fees, ATM fee reimbursements, and higher savings rates compared to traditional banks. Visit a nearby credit union or check out their websites for more information and to find out which offers are available to students in your area.",
      },
    ],
  },
  {
    key: "campus_employment",
    icon: Work,
    title: "Campus Employment",
    cardcontent: [
      {
        id: 5,
        onboardingTitle: "Browse Handshake Opportunities",
        onboardingInfo:
          "Handshake is the top platform used by universities to connect students with job opportunities, internships, and career events. It allows you to apply directly to positions, schedule interviews, and attend virtual or in-person career fairs. Employers specifically look for students on Handshake, so it’s an essential tool to access job openings tailored to your skillset and interests. Sign up and start browsing available opportunities here: [Handshake](https://joinhandshake.com/).",
      },
      {
        id: 6,
        onboardingTitle: "Research Assistant Positions",
        onboardingInfo:
          "Research assistant positions provide valuable experience in academic and scientific research while earning money. As a research assistant, you'll have the chance to assist professors and researchers with projects, data collection, and experiments. These positions are often flexible and tailored to student schedules, making them ideal for those looking to gain hands-on experience in their field. Check with your department or university's job board for available positions.",
      },
      {
        id: 7,
        onboardingTitle: "Department Work-Study Jobs",
        onboardingInfo:
          "Work-study jobs offer students the opportunity to work on campus and earn money while attending school. These positions are often directly related to your field of study, providing both financial support and valuable work experience. Many departments offer flexible hours to accommodate your class schedule. To apply for work-study positions, visit your school's financial aid office or career services for more details on available jobs and the application process.",
      },
      {
        id: 8,
        onboardingTitle: "Career Center Resources",
        onboardingInfo:
          "Your university's career center is a goldmine for job seekers. In addition to offering personalized career counseling and resume-building workshops, they often host mock interviews, networking events, and career fairs. Many career centers also partner with employers to post exclusive job opportunities for students. Make sure to stop by your career center or visit their website for all the resources they provide to help you launch your career.",
      },
    ],
  },
  {
    key: "insurance",
    icon: LocalHospital,
    title: "Insurance",
    mainText: "Follow these steps to activate your insurance:",
    cardcontent: [
      {
        id: 9,
        onboardingTitle: "Visit Student Health Center",
        onboardingInfo:
          "To activate your student health insurance, start by visiting your campus's Student Health Center. They can provide you with important information about the available health plans, and many universities automatically enroll students in their health insurance programs. If you're unsure whether you have coverage, or need to make adjustments to your plan, this is the place to get started.",
      },
      {
        id: 10,
        onboardingTitle: "Present Required Documents",
        onboardingInfo:
          "When you visit the health center, you’ll likely need to present documents such as proof of enrollment, your student ID, and possibly proof of prior insurance if you're opting out of the university plan. Be sure to ask about any specific forms you need to complete or submit before activating your coverage. This step ensures you're fully enrolled and protected while you're studying.",
      },
      {
        id: 11,
        onboardingTitle: "Complete Registration",
        onboardingInfo:
          "Once you have visited the health center, you’ll need to complete any registration requirements. This may involve filling out forms to finalize your coverage selection or updating your personal information. If you're enrolling in university-sponsored insurance, make sure to ask about payment deadlines and whether there are any additional steps to complete the registration process.",
      },
      {
        id: 12,
        onboardingTitle: "Attend Orientation",
        onboardingInfo:
          "Some universities offer insurance orientation sessions, either in-person or online, where you can learn more about what your insurance covers, how to file claims, and where to seek care. Attending an insurance orientation is a great way to ensure you understand all the details of your coverage, including how to get medical care both on and off campus. Be sure to attend if offered, as it's an essential step to becoming familiar with your benefits.",
      },
    ],
  },
  {
    key: "opportunities",
    icon: School,
    title: "Opportunities",
    cardcontent: [
      {
        id: 13,
        onboardingTitle: "Colorstack - Tech Opportunities",
        onboardingInfo:
          "Colorstack is an incredible resource for students of color pursuing careers in tech. They provide access to internship opportunities, mentorship programs, and networking events with leading tech companies. Whether you're looking for internships, full-time positions, or simply advice from professionals, Colorstack offers valuable resources to help you build your career in the tech industry. Visit their website and sign up for events and opportunities here: [Colorstack](https://www.colorstack.org/).",
      },
      {
        id: 14,
        onboardingTitle: "LinkedIn - Professional Network",
        onboardingInfo:
          "LinkedIn is a must-have platform for any professional. It allows you to connect with people in your industry, stay up-to-date on job postings, and get discovered by potential employers. As a student, you can leverage LinkedIn to build a strong professional profile, join relevant groups, and follow companies you’re interested in. LinkedIn also has great resources for career development, such as resume tips and interview advice. Get started and create your profile here: [LinkedIn](https://www.linkedin.com/).",
      },
      {
        id: 15,
        onboardingTitle: "University Job Board",
        onboardingInfo:
          "Most universities have an online job board where you can search for on-campus and off-campus jobs, internships, and volunteer opportunities. These boards often feature positions that are specifically tailored to students and may offer flexible hours to fit your academic schedule. Be sure to check your university’s job board regularly for new postings and updates on available opportunities.",
      },
      {
        id: 16,
        onboardingTitle: "Career Fairs",
        onboardingInfo:
          "Career fairs are fantastic opportunities to meet recruiters from top companies, learn about job openings, and even secure interviews. Many universities host career fairs for students looking for internships or full-time jobs. Whether virtual or in-person, career fairs provide an excellent platform to network, make a lasting impression, and even get a head start on your job search. Be sure to attend these events, as they can often lead to your first job or internship offer.",
      },
      {
        id: 17,
        onboardingTitle: "Professional Associations",
        onboardingInfo:
          "Joining a professional association related to your field of study can provide you with access to exclusive job boards, conferences, and networking events. These associations also offer resources to help you improve your skills, stay updated on industry trends, and connect with other professionals. Popular associations include the [National Society of Professional Engineers](https://www.nspe.org/) for engineering students and the [American Marketing Association](https://www.ama.org/) for marketing students. Explore associations in your field and join to take your career to the next level.",
      },
    ],
  },
  {
    key: "transportation",
    icon: DirectionsBus,
    title: "Transportation",
    mainText: "Getting around campus:",
    cardcontent: [
      {
        id: 18,
        onboardingTitle: "Translock App for Bus Tracking",
        onboardingInfo:
          "The Translock app helps you track buses in real-time, making it easier to plan your commute. You can view live bus locations and estimated arrival times, ensuring that you’re never left waiting for long. The app also offers route information, so you can easily navigate public transit around campus. Download the app and start saving time on your daily commute.",
      },
      {
        id: 19,
        onboardingTitle: "Student Bus Pass",
        onboardingInfo:
          "Many schools offer discounted or free bus passes for students, which can save you a lot of money on transportation costs. Check with your university’s transportation office to find out how to obtain a student bus pass, and learn about any additional transportation options, such as discounts for ridesharing services or biking programs.",
      },
      {
        id: 20,
        onboardingTitle: "Campus Bike-Share Program",
        onboardingInfo:
          "If you prefer biking to get around campus, consider signing up for your university’s bike-share program. Bike-share programs typically offer affordable rates for students and provide bikes at convenient stations around campus. It’s an eco-friendly, healthy, and convenient way to get from class to class. Ask at your campus transportation office to find out more about this option.",
      },
      {
        id: 21,
        onboardingTitle: "Parking Permit Information",
        onboardingInfo:
          "If you plan to bring a car to campus, you'll need a parking permit. Many universities offer discounted parking rates for students. Be sure to check your school’s parking portal for information on how to purchase a permit, the different pricing tiers, and rules regarding parking on campus. Parking spaces can fill up quickly, so apply early to secure your spot.",
      },
    ],
  },
  {
    key: "grocery_shopping",
    icon: ShoppingCart,
    title: "Grocery Shopping",
    mainText: "Nearby shopping options:",
    cardcontent: [
      {
        id: 22,
        onboardingTitle: "Walmart Supercenter",
        onboardingInfo:
          "Walmart Supercenters are a great one-stop shop for all your grocery and household needs. They offer affordable prices on fresh produce, snacks, and even dorm essentials. Walmart is typically open late, which makes it convenient for late-night shopping. Check out their locations and browse products here: [Walmart](https://www.walmart.com/).",
      },
      {
        id: 23,
        onboardingTitle: "Target",
        onboardingInfo:
          "Target is another popular grocery store for students, known for its affordable groceries, stylish dorm décor, and trendy clothing. They also offer many organic and healthy food options. Target’s in-store app allows you to create shopping lists and find weekly deals, which is perfect for saving time and money. Find a Target store near you: [Target](https://www.target.com/).",
      },
      {
        id: 24,
        onboardingTitle: "Local Farmer's Market",
        onboardingInfo:
          "Local farmer’s markets are a fantastic option for students who want to support local farmers and enjoy fresh, organic produce. Many farmer’s markets also sell artisanal breads, cheeses, and homemade goods. You can often find markets operating year-round, and they provide an opportunity to buy produce directly from growers. Check your city’s farmer’s market schedule for locations and hours.",
      },
      {
        id: 25,
        onboardingTitle: "Whole Foods",
        onboardingInfo:
          "Whole Foods is a popular grocery chain known for its high-quality organic foods and sustainable sourcing practices. While prices may be a bit higher than traditional grocery stores, Whole Foods offers a wide range of specialty items like gluten-free, vegan, and fair-trade products. Find your nearest Whole Foods location here: [Whole Foods](https://www.wholefoodsmarket.com/).",
      },
      {
        id: 26,
        onboardingTitle: "Trader Joe's",
        onboardingInfo:
          "Trader Joe’s is a favorite among college students for its budget-friendly prices and unique selection of foods. Known for its small, cozy stores and fun packaging, Trader Joe’s offers everything from organic snacks to frozen meals and ready-to-go lunch options. Their prices are hard to beat, and many products are exclusive to the store. Find a Trader Joe’s near you: [Trader Joe's](https://www.traderjoes.com/).",
      },
    ],
  },
];
