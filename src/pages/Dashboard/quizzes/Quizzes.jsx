import React, { useState } from "react";
import { ArrowLeft } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

const quizzes = [
  { id: 1, title: "Sub Inspector Preparation", type: "quiz" },
  { id: 2, title: "CSS Screening Preparation", type: "quiz" },
  { id: 3, title: "PMSGN Preparation", type: "quiz" },
  { id: 4, title: "Sub Inspector Preparation", type: "quiz" },
  { id: 5, title: "CSS Screening Preparation", type: "quiz" },
  { id: 6, title: "PMSGN Preparation", type: "quiz" },
  { id: 7, title: "Sub Inspector Preparation", type: "quiz" },
  { id: 8, title: "CSS Screening Preparation", type: "quiz" },
  { id: 9, title: "PMSGN Preparation", type: "quiz" },
];

const Quizzes = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const Card = ({ children, className }) => (
    <div className={`bg-white rounded-2xl shadow ${className}`}>{children}</div>
  );

  const CardContent = ({ children, className }) => (
    <div className={`p-4 ${className}`}>{children}</div>
  );

  const Button = ({ children, onClick, variant = "primary", size = "md", className }) => {
    const base =
      "rounded-xl font-medium transition px-4 py-2 focus:outline-none text-sm";
    const variants = {
      primary: "bg-purple-400 text-white hover:bg-purple-600",
      secondary: "bg-pink-200 text-black hover:bg-pink-300",
      outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
      ghost: "text-gray-500 hover:bg-gray-100",
    };
    const sizes = {
      sm: "px-3 py-1 text-xs",
      md: "px-4 py-2 text-sm",
    };
    return (
      <button
        onClick={onClick}
        className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      >
        {children}
      </button>
    );
  };

  const renderDashboard = () => (
    <div className="p-6 space-y-6">
      {/* Quiz Invitations */}
      <div className="quizesinvite rounded-2xl shadow p-4">
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold mb-2">Quiz Invitations</h2>
          <h3>View All</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <Card key={i} className="p-4 flex flex-col items-start text-start">
                <p className="text-sm">Today 10:00 PM</p>
                <p className="text-xs mb-2">Ali Invited You For Math Quiz</p>
                <h1  className="text-xs text-purple-700">JOIN QUIZ &gt; </h1>
              </Card>
            ))}
        </div>
        <div className="flex justify-center gap-2 mt-4">
  <span className="w-2 h-2 rounded-full bg-green-500"></span>
  <span className="w-2 h-2 rounded-full bg-gray-300"></span>
  <span className="w-2 h-2 rounded-full bg-gray-300"></span>
  <span className="w-2 h-2 rounded-full bg-gray-300"></span>
</div>

      </div>

      {/* Today Quizzes */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Today Quizzes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {quizzes.map((quiz) => (
            <Card key={quiz.id} className="rounded-2xl shadow-md">
              <CardContent className="flex flex-col items-start text-center">
                <span className="text-xs text-purple-500 font-bold mb-1">QUIZ #{quiz.id}</span>
                <p className="text-base font-medium mb-3">{quiz.title}</p>
                <Button size="sm" onClick={() => setSelectedQuiz(quiz)}>START QUIZ</Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
      </div>
    </div>
  );

const renderQuizPage = () => (
  <div className="p-16 space-y-6">
    <div className=" rounded-2xl  p-6">
      
      {/* Full Width Tabs */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <Button  className="w-full h-20 py-3 bg-[#704fe627]">Flash Card</Button>
        <Button variant="outline" className="w-full py-3">Test</Button>
      </div>

      {/* Flashcard */}
      <Card className="displayquiz p-8 rounded-2xl shadow-md flex flex-col justify-center items-center">
        <p className="text-2xl font-bold mb-4 text-start">Brandish</p>
        <p className="text-md text-black mb-6 max-w-lg mx-auto font-bold">
          "a man leapt out brandishing a knife" wave something, especially a weapon,
          in anger or excitement.
        </p>

        {/* Save / Counter / Upload row */}
        <div className="flex justify-center gap-2 items-center mb-4">
           <button className="text-gray-500 hover:text-gray-700 border border-purple-800 rounded-4xl px-4"><ArrowLeft/></button>
          <span className="text-sm font-medium text-gray-600">01/200</span>
          <button className="text-gray-500 hover:text-gray-700 border border-purple-800 rounded-4xl px-4"><ArrowRight/></button>
          
        </div>

        
      </Card>
    </div>

    {/* Back Button */}
    <button
      onClick={() => setSelectedQuiz(null)}
      className="text-sm text-blue-600 hover:underline flex items-center gap-1"
    >
      ⬅ Back to Quizzes
    </button>
  </div>
);


  return (
    <div className="w-full">
      {selectedQuiz ? renderQuizPage() : renderDashboard()}
    </div>
  );
};

export default Quizzes;