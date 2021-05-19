<template>
    <div>
        <div id="current" class="profile">

                <div class="input-container">
                <i class="fa fa-home"></i>
                <label>Username: {{this.currentUser.username}}</label>
                </div>

                <div class="input-container">
                <label>UserType:{{this.currentUser.profile.usertype}}</label>
                </div>

                <div class="input-container">       
                <label>Fullname:{{this.currentUser.profile.fullname}}</label>   
                </div>
                
                <div class="input-container"> 
                <label>Address:{{this.currentUser.profile.address}}</label>
                </div>

                <div class="input-container"> 
                <label>Phone:{{this.currentUser.profile.phone}}</label>
                </div>
        </div>
        <center><div class="input-container" @click="switchFunction()"> 
            <button >Edit</button>
        </div></center>
    </div>
</template>

<script>
export default {

    meteor: {
        currentUser() {
        return Meteor.user();
    }
    }
}
</script>
