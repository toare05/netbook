'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Form() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<{ [key: string]: string }>({})

  const questions = [
    {
      id: 1,
      question: "당신이 가장 재밌었던 수업은?",
      options: [
        "게임 개발(유니티, 언리얼, Pygame)",
        "웹 개발(HTML, CSS, JavaScript)",
        "앱 개발(React Native, Flutter)",
        "데이터 분석(Python, R)",
        "인공지능(머신러닝, 딥러닝)"
      ]
    },
    {
      id: 2,
      question: "당신이 가장 재밌었던 수업은?",
      options: [
        "게임 개발(유니티, 언리얼, Pygame)",
        "웹 개발(HTML, CSS, JavaScript)",
        "앱 개발(React Native, Flutter)",
        "데이터 분석(Python, R)",
        "인공지능(머신러닝, 딥러닝)"
      ]
    },
    {
      id: 3,
      question: "당신이 가장 재밌었던 수업은?",
      options: [
        "게임 개발(유니티, 언리얼, Pygame)",
        "웹 개발(HTML, CSS, JavaScript)",
        "앱 개발(React Native, Flutter)",
        "데이터 분석(Python, R)",
        "인공지능(머신러닝, 딥러닝)"
      ]
    }
  ]

  const handleAnswer = (answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [`answer_${currentStep + 1}`]: answer
    }))
  }

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1)
    } else {
      // 결과 페이지로 이동
      router.push('/result')
    }
  }

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push('/result')
  }

  return (
    <section id="survey">
      <div className="wrapper">
        <form id="form" onSubmit={handleSubmit}>
          {questions.map((q, index) => (
            <div key={q.id} className="test" style={{ display: index === currentStep ? 'block' : 'none' }}>
              <div className="question_container">
                <h3 className="number">{index + 1}/{questions.length}</h3>
                <h3 className="question">{q.question}</h3>
              </div>
              <div className="answer">
                {q.options.map((option, optionIndex) => (
                  <div key={optionIndex}>
                    <input
                      type="radio"
                      id={`option_${optionIndex}`}
                      name={`answer_${index + 1}`}
                      value={option}
                      checked={answers[`answer_${index + 1}`] === option}
                      onChange={() => handleAnswer(option)}
                    />
                    <label htmlFor={`option_${optionIndex}`}>{option}</label>
                  </div>
                ))}
              </div>
              <div className={`btn_wrap ${index > 0 ? 'btn_sort' : ''}`}>
                {index > 0 && (
                  <button className="prev_btn" type="button" onClick={handlePrev}>
                    이전
                  </button>
                )}
                {index < questions.length - 1 ? (
                  <button className="next_btn" type="button" onClick={handleNext}>
                    다음
                  </button>
                ) : (
                  <input type="submit" value="제출" className="submit_btn" />
                )}
              </div>
            </div>
          ))}
        </form>
      </div>
    </section>
  )
} 