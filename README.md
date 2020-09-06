# Fishing-Display
Displays fish from NieR: Automata in a react component. Component creation demo.

The idea started with the initial mockup sketch of the component and how it would function.
A breadcrumb would pop up outside of the box, and the box would shrink to show the remaining fish.

After feedback, I was told not to do this, and instead had it so the fish got a checkmark and the breadcrumb would show seperately.

I then created the initial component, fishing_display.js, using node and creating the component from the minimum viable product to first incorporate all necessary features and then appearance, utilizing feedback on the appearance along the way.

After that, because the component could not be integrated as native react code, I had to rework it in order to be usable by outside code as pure html/css. I did this by changing the render code to instead use css and classes that could be added instead of the render state. In addition, because the breadcrumb was not deemed necessary, it was removed. At the same time, I used css creatively in order to get the checkmark to animate on class add.

After that, it was decided that one component would be used to track the state of how two seperate teams had caught the fish. Therefore, I had to change the design of the component and classes to support having multiple teams, incorporating feedback on visuals and testing how it looked in multiple environments. I incorporated feedback to make the component fit the design of existing visuals.

The entire time, I leveraged features of nextjs and react, such as stylex jsx for styles that work in multiple places, or variables to easily change how things looked, to even enabling the list of fish to be editable on the fly.

build/index.html shows the latest version that is ready for inclusion into the stream layout.



## Building:

Clone or download the repository or otherwise get it into a folder.

run `npm install react react-dom next` to install the dependencies

run `npx next build` to build it

run `npx next export -o ./build/` to output to the build directory

manually remove the script files from the export

then add in the line `<script src="race.js" type="module"></script>` at the start of `<body>` to connect it to @rodg's logic
