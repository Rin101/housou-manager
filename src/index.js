import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Checksheet() {
  const [d, setD] = useState(new Date())
  const today = (d.getMonth() + 1).toString() + "/" + d.getDate().toString() + "/" + d.getFullYear().toString()

  const [chapterSums, setChapterSum] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])

  let subjectList = [
    "初歩からの数学",
    "入門線型代数",
    "哲学・思想を今考える",
    "西洋哲学の起源",
    "初歩からの物理",
    "物理の世界",
    "初歩からの生物学",
    "生命分子と細胞の科学",
    "心理学概論",
    "発達心理学概論",
    "経営学概論",
  ]

  const scheduleList = [
    ['4/8/2021', "start"],
    ['5/14/2021', "通信指導"],
    ['5/28/2021', "通信指導"],
    ['5/31/2021', "end of read through phase"],
    ['6/1/2021', "過去問、自己学習サイト,授業共有ファイルなど phase"],
    ['7/13/2021', "単位認定試験 start"],
    ['7/20/2021', "単位認定試験 last day"],
  ]

  const getDayDiff = (a, b) => {
    const date1 = new Date(a);
    const date2 = new Date(b);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    return diffDays
  }
  getDayDiff(scheduleList[1][0], scheduleList[2][0])

  let stTotal = getDayDiff(scheduleList[0][0], today) * 3
  let myTotal = chapterSums.reduce((a, b) => a + b, 0)

  let goalNum = subjectList.length * 15
  let phaseName = "read through"
  let myProgress =  Math.round((myTotal/goalNum)*1000) / 10
  let myProgressString = myProgress + "%"
  let scheduleProgress =  Math.round((getDayDiff(today, scheduleList[0][0])/getDayDiff(today, scheduleList[6][0]))*100)
  let scheduleProgressString = scheduleProgress + "%"


  const SubjectCards = () => {
    return (
      subjectList.map((subject) => {
        const i = subjectList.indexOf(subject)

        const decSum = () => {
          let arr = []
          chapterSums.forEach(sub => {
            arr.push(sub)
          })
          arr[i] -= 1
          setChapterSum(arr)
        }
        const incSum = () => {
          let arr = []
          chapterSums.forEach(sub => {
            arr.push(sub)
          })
          arr[i] += 1
          setChapterSum(arr)
        }

        const getFontSize = (textLength) => {
          const baseSize = 18
          if (textLength >= baseSize) {
            textLength = baseSize - 2
          }
          const fontSize = baseSize - textLength
          console.log(fontSize)
          return `${fontSize}px`
        }
        
        return (
          <div className="subject-card" key={subject}>
            <div className="subject-title">
              <p style={{fontSize: getFontSize(subject.length)}}>{subject}</p>
              {/* <p>{subject}</p> */}
            </div>
            <div className="card-line"></div>
            <div className="card-counter">
              <i className="fas fa-chevron-left" onClick={() => decSum()}></i>
              <p>{chapterSums[i]}</p>
              <i className="fas fa-chevron-right" onClick={() => incSum()}></i>
            </div>
          </div>
        )
      })
    )
  }

  const TimeStamps = () => {
    return (
      scheduleList.map(timestamp => {
        return(
          <p key={timestamp} style={{left: Math.round((getDayDiff(today, timestamp[0])/getDayDiff(today, scheduleList[6][0]))*100).toString()+"%"}}>{ timestamp[0] }</p>
        )
      })
    )
  }

  return(
      <div className="checksheet">
        <p className="date">{ today }</p>
        <div className="checksheet-container">
          <div className="mychecksheet">
            <h2>total: { myTotal }</h2>
            <div className="cards-container">
              <SubjectCards />
            </div>
            <p>{ myTotal } out of { goalNum } read through: { myProgressString }</p>
          </div>
        </div>
        <div className="progress-bars">
          <div id="myProgress">
            <p>{ phaseName } phase</p>
            <div className="timestamps" id="myProgressTimestamps">
              <p style={{left: "0%"}}>{ scheduleList[0][0] }</p>
              <p style={{left: Math.round((getDayDiff(today, scheduleList[0][0])/getDayDiff(today, scheduleList[3][0]))*100).toString()+"%"}}>{ today } today</p>
              <p style={{left: "100%"}}>{ scheduleList[3][0] }</p>
            </div>
            <div className="bar">
              <div className="" style={{width:myProgressString}}></div>
              <section className="todayBar" style={{left: Math.round((getDayDiff(today, scheduleList[0][0])/getDayDiff(today, scheduleList[3][0]))*100).toString()+"%"}}></section>
            </div>
          </div>
          <div id="scheduleProgress">
            <div className="timestamps" id="scheduleTimestamps">
              <TimeStamps />
            </div>
            <div className="bar">
              <div className="" style={{width:scheduleProgressString}}></div>
            </div>
          </div>
        </div>
      </div>
  )
}

class App extends React.Component {

  render() {
    return(
      <div className="app">
        <Checksheet />
      </div>
    )
  }
}

// ========================================
// ====  USE STRICTMODE?     ======================
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


