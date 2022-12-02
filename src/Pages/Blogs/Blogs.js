import React from "react";

const Blogs = () => {
  return (
    <div>
      <div className="flow-root container mx-auto bg-gray-300">
        <div className="divide-y px-8 py-16">
          <details className="group py-8 " open>
            <summary className="flex cursor-pointer items-center justify-between">
              <h2 className="text-lg font-medium text-gray-900">
                What are the different ways to manage a state in a React
                application?
              </h2>

              <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700">
              Which state management is best in React? React's useState is the
              best option for local state management. If you need a global state
              solution, the most popular ones are Redux, MobX, and the built-in
              Context API. Your choice will depend on the size of your project,
              your needs, and your engineers' expertise.
            </p>
          </details>

          <details className="group py-8">
            <summary className="flex cursor-pointer items-center justify-between">
              <h2 className="text-lg font-medium text-gray-900">
                How does prototypical inheritance work?
              </h2>

              <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700">
              The Prototypal Inheritance is a feature in javascript used to add
              methods and properties in objects. It is a method by which an
              object can inherit the properties and methods of another object.
              Traditionally, in order to get and set the [[Prototype]] of an
              object, we use Object. getPrototypeOf and Object.
            </p>
          </details>

          <details className="group py-8">
            <summary className="flex cursor-pointer items-center justify-between">
              <h2 className="text-lg font-medium text-gray-900">
                What is a unit test? Why should we write unit tests?
              </h2>

              <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700 mb-5">
              A unit test is a way of testing a unit - the smallest piece of
              code that can be logically isolated in a system. In most
              programming languages, that is a function, a subroutine, a method
              or property. The isolated part of the definition is important.
            </p>
            <p className="mt-4 leading-relaxed text-gray-700">
              Well-written unit tests act as documentation for your code. Any
              developer can quickly look at your tests and know the purpose of
              your functions. It simplifies the debugging process. Unit testing
              is an integral part of extreme programming
            </p>
          </details>

          <details className="group py-8">
            <summary className="flex cursor-pointer items-center justify-between">
              <h2 className="text-lg font-medium text-gray-900">
                React vs. Angular vs. Vue?
              </h2>

              <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700">
              <span className="text-2xl mb-5">React</span> is one of the most
              popular JavaScript projects with 160k stars on GitHub. It’s
              developed and maintained by Facebook, and it’s used internally in
              many of their projects. Additionally, it powers over 2 million
              websites, according to BuiltWith‘s usage statistics.
            </p>
            <p className="mt-4 leading-relaxed text-gray-700">
              <span className="text-2xl mb-5">Angular</span> is developed by
              Google, but surprisingly it’s not used in some of their flagship
              products such as Search or Youtube. It’s often used in enterprise
              projects, and it powers over 97,000 websites based on BuiltWith‘s
              data. It’s the least starred among the three frameworks, with 68k
              stars on GitHub. However, when switching from Angular 1 to Angular
              2, they created an entirely new repository instead of continuing
              the AngularJS project, which also has 59k stars.
            </p>
            <p className="mt-4 leading-relaxed text-gray-700">
              <span className="text-2xl mb-5">Vue</span> Out of the three
              frameworks, Vue has the most stars on GitHub, with 176k stars. The
              project is developed and led by ex-Googler Evan You. It’s a very
              strong, independent project in the open-source community and is
              used by over 1 million websites, according to BuiltWith.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
