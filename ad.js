// Hypothetical scenario
let selCmpt = {
    project: {
        hasChannel: function(channelName) {
            // Logic to check if project has the specified channel
            // Returns true or false based on the check
            // Example logic:
            return this.channels.includes(channelName);
        },
        channels: ['channel1', 'channel2', 'channel3']
    }
};

// Assigning selCmpt.project.hasChannel to }
} = selCmpt.project.hasChannel;

// Now } holds a reference to selCmpt.project.hasChannel function

// Example usage of }
let hasChannel1 = }(selCmpt, 'channel1'); // Example call to check if 'channel1' exists

console.log(hasChannel1); // Output: true
