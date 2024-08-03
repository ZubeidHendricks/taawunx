pragma solidity ^0.8.0;

contract ProjectManagement {
    address private owner;
    uint public milestoneCount;
    uint public paymentCount;
    uint public deadlineCount;

    struct Milestone {
        uint id;
        string description;
        uint deadline;
        bool completed;
    }

    struct Payment {
        uint id;
        uint amount;
        address payable recipient;
        bool paid;
    }

    struct Deadline {
        uint id;
        uint timestamp;
    }

    Milestone[] public milestones;
    Payment[] public payments;
    Deadline[] public deadlines;

    constructor() {
        owner = msg.sender;
    }

    function createMilestone(string memory _description, uint _deadline) public {
        milestones.push(Milestone(milestones.length, _description, _deadline, false));
    }

    function createPayment(uint _amount, address payable _recipient) public {
        payments.push(Payment(payments.length, _amount, _recipient, false));
    }

    function createDeadline(uint _timestamp) public {
        deadlines.push(Deadline(deadlines.length, _timestamp));
    }

    function createProject(string memory _projectName, uint _deadline) public {
        // Create a new project with milestones, payments, and deadlines
        milestones.push(Milestone(milestones.length, _projectName, _deadline, false));
        payments.push(Payment(payments.length, 0, address(0), false));
        deadlines.push(Deadline(deadlines.length, _deadline));
    }

    function addMilestone(uint _projectId, string memory _milestoneName, uint _milestoneDeadline) public {
        // Add a new milestone to the project
        milestones.push(Milestone(milestones.length, _milestoneName, _milestoneDeadline, false));
    }

    function addPayment(uint _projectId, uint _paymentAmount, address payable _recipient) public {
        // Add a new payment to the project
        payments.push(Payment(payments.length, _paymentAmount, _recipient, false));
    }

    function addDeadline(uint _projectId, uint _deadline) public {
        // Add a new deadline to the project
        deadlines.push(Deadline(deadlines.length, _deadline));
    }
}
