import React, { useState } from "react";

const studentNames = [
  "Ayush Bhatt", "Lovepreet Singh", "Parth Sinha", "Utkarsh Gautam", "Md.Saif", 
  "Yash Baberwal", "Shivanand Rai", "Shubham Kumar", "Harshit Singh", "Vansh Malik",
  "Anuj", "Tushar", "AKSHAN DHYANI", "MANISH BISHT", "ABHAY SINGH", "KUNDAN KUMAR",
  "Ananya Mishra", "Praneet Sahay", "Jasdev Singh", "Aryan Tandon", "Shivansh Rajput",
  "Abhishek Rawat", "Sarvesh Mathur", "Ritesh Dixit", "Muskan Yadav", "Trisha Dhariya",
  "Rashika Thapa", "Vikrant Yadav", "Riya", "Ishan", "Shiwangi", "Jyoti Choudhary",
  "Ankush Painuly", "Siddharth Bhatt", "Keshav Raturi", "Yash Singh Gusain",
  "Ishant Hatwal", "Mansi Panwar", "Basant Ballabh Bhatt", "Himanshu Yadav",
  "Kartik Raina", "Ansh Chandan", "Himanshu Kandpal", "Shivansh Sahil", "MUSKAN SAHANI",
  "Vidisha Chauhan", "ROHIT SINGH ADHIKARI", "SACHIN GARIYA", "Keshav", "Bharti Rawat",
  "Lucky Singh Panwar", "Deepak Rawat", "Krish Kumar", "Lalit Nandan", "Neeraj Mer",
  "Saurabh Mehra", "Abhay Bisht", "Dev Ashish Saklani", "Parimanjhan Negi", "Mahaveer",
  "Ranvbir Kumar Das", "Priyanshu Raj", "Ritik Kumar", "Himanshu", "Rohit Lakharwal",
  "Aaditya Prasad", "Sanskriti Gupta", "Aarshista Joshi", "Mukta Pal", "Anisha Dhanda",
  "Priyanshu Bisht", "Shivan Negi", "Shubham Chand", "Akhil Puri", "Prakash Kumar",
  "Parul Saxena", "Kartik Kumar Singh", "Aditya Kumar", "Anjali Rana", "Rachit",
  "Suraj Kumar", "Gurmeet Singh", "Karan Singh Rawat", "Anika Mishra", "Apporva",
  "Khushi", "Rudra Aneja", "Kanwal", "Anurag Parihar", "Shagun Salal", "Sahil Sahoo",
  "Manisha Parihar", "Priyanshu Morya", "Manisha Nayal", "Kanishka Rawat", "Anjali Rajput",
  "Yash Kholiya", "Rahul Bisht", "Atul", "Shivansh Dubey", "Vaibhav Patel", "Amit Kumar",
  "Aruna Rawat", "Sahil Khan", "Ashka Verma", "Ayush Kumar", "Rishi Yadav", "Shivam",
  "Yash Mishra", "Vansh Rana", "Akashdeep Kandari", "Rajesh Dhirvan", "Tanuja Negi",
  "Aman", "Akansha Rai", "Sagar Singh", "Vansh Rana", "Abhishek Khati", "Rahul Choudhary",
  "Diksha Chauhan", "Akash", "Sundaram Sharma", "Himanshu Rawat", "Aakashi Tyagi",
  "Abhay Singh Dhek", "Aniket Rawat", "Neha Rawat", "Kevin Roy", "Chetan Pal",
  "Abhay Dhek", "Rajat Joshi", "Vishal Naugain", "Harpreet Singh", "Prince Bharadwaj",
  "Lucky Bisht", "Shrinjay Sumit", "Gaurav Goswami", "Lavana Moirangthem", "Vivek Singh",
  "Mayank", "Abhay Kumar", "Vivek Singh", "Rezim Titoria", "Manan Singh",
  "Rishu Raj", "Jatin Dangi", "Kuldeep Singh Rawat", "Amvi Karotia", "Gaurav Singh Singhwal",
  "Anamika", "Himanshu Choudhary", "Gaurav Singwal", "Priyanshu Rajput"
];

const CertificateGallery = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const filteredNames = studentNames.filter((name) =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDownload = (name) => {
    const link = document.createElement("a");
    link.href = `/certificates/${name}.png`;
    link.download = `${name}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="gallery-container">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by name..."
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Certificate Grid */}
      <div className="certificate-grid">
        {filteredNames.map((name) => (
          <div key={name} className="certificate-item">
            <img
              src={`/certificates/${name}.png`}
              alt={`${name}'s Certificate`}
              className="certificate-preview"
              onClick={() => setSelectedCertificate(name)}
              onError={(e) => (e.target.style.display = "none")} // Hide broken images
            />
            <p>{name}</p>
          </div>
        ))}
      </div>

      {/* Download Button (Only when an image is clicked) */}
      {selectedCertificate && (
        <div className="download-popup">
          <h3>{selectedCertificate}'s Certificate</h3>
          <img
            src={`/certificates/${selectedCertificate}.png`}
            alt="Selected Certificate"
            className="selected-preview"
          />
          <button onClick={() => handleDownload(selectedCertificate)}>Download</button>
          <button onClick={() => setSelectedCertificate(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default CertificateGallery;
