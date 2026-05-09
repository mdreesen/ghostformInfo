<script setup lang="ts">


const formData = ref({
  organization: '',
  role: 'realtor',
  agreeToTerms: false
});
const credentials = reactive({
    email: '',
    password: '',
    confirm_password: '',
    privacy_policy: true
});
const formRef = ref();
const isLoading = ref(false);
let errorMessage = ref('');
const { fetch: refreshSession } = useUserSession();

async function handler() {
    try {
        isLoading.value = true;
        await $fetch('/api/authentication/signup', { method: 'POST', body: credentials });
        await $fetch('/api/authentication/login', { method: 'POST', body: { email: credentials.email, password: credentials.password } });
        await refreshSession();
        await navigateTo('/dashboard');

    } catch (error) {
        // toast.error("Sign up failed", 'Try again');
        console.log(error)
        errorMessage.value = error.statusMessage;
        isLoading.value = false;
    }
};
</script>

<template>
  <div class="min-h-screen bg-[#0a0a0c] text-white font-sans flex items-center justify-center p-6 relative overflow-hidden">

    <main class="w-full max-w-120 z-10">
      <div class="backdrop-blur-2xl bg-white/2 border border-white/8 rounded-[2.5rem] p-10 shadow-2xl">
        
        <header class="mb-10">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 rounded-xl bg-linear-to-br from-[#30cf43] to-[#15a327] flex items-center justify-center shadow-[0_0_20px_rgba(48,207,67,0.3)]">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </div>
            <h1 class="text-2xl font-bold tracking-tight">Initialize Account</h1>
          </div>
          <p class="text-zinc-400 text-sm italic-none">Join the network of high-velocity real estate intelligence.</p>
        </header>

        <div class="space-y-6">

            
            <form @submit.prevent="handler" class="space-y-6">
                    <div v-motion="{ ...inputVarient() }">
                        <baseLabel text="Email" />
                        <input id="email" type="email" v-model="credentials.email" placeholder="Email" required
                            class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>

                    <div v-motion="{ ...inputVarient() }">
                        <baseLabel text="Password" />
                        <input id="password" type="password" v-model="credentials.password" placeholder="Password"
                            required
                            class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>

                    <div v-motion="{ ...inputVarient() }">
                        <baseLabel text="Confirm password" />
                        <input id="confirm_password" type="password" v-model="credentials.confirm_password"
                            placeholder="Password" required
                            class="w-full rounded-xl border border-gray-600 bg-gray-700/50 py-3 px-4 text-lg text-white shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>

                    <div v-motion="{ ...inputVarient() }" class="flex items-center space-x-2">
                        <input id="privacy" type="checkbox" v-model="credentials.privacy_policy" required
                            class="rounded-md border-gray-600 text-purple-500 focus:ring-purple-500 transition-colors duration-200" />
                        <div>
                            <baseLabel text="I agree to the" />
                            <NuxtLink to="/privacy-policy" class="text-blue-400 hover:underline transition-colors">
                                Privacy Policy</NuxtLink>
                        </div>
                    </div>

                    <div v-motion="{ ...inputVarient() }">
                        <button type="submit" :disabled="isLoading"
                            class="w-full rounded-xl bg-linear-to-r from-blue-500 to-purple-600 py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 ease-in-out hover:from-blue-600 hover:to-purple-700 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                            {{ isLoading ? 'Signing Up...' : 'Sign up' }}
                        </button>
                    </div>

                </form>



          <div class="relative flex items-center py-4">
            <div class="grow border-t border-white/5"></div>
            <span class="shrink mx-4 text-zinc-600 text-[9px] uppercase tracking-[0.3em] font-black">Preferences</span>
            <div class="grow border-t border-white/5"></div>
          </div>

          <div class="space-y-4">
            <div>
              <label class="text-[10px] font-bold uppercase tracking-widest text-zinc-500 ml-1 mb-2 block">Organization Name</label>
              <input v-model="formData.organization" type="text" placeholder="e.g. Ironclad Realty" 
                class="w-full bg-white/3 border border-white/10 rounded-xl px-5 py-3 text-sm focus:outline-none focus:border-[#30cf43]/50 transition-colors placeholder:text-zinc-700" />
            </div>

            <div>
              <label class="text-[10px] font-bold uppercase tracking-widest text-zinc-500 ml-1 mb-2 block">Primary Role</label>
              <select v-model="formData.role" class="w-full bg-[#121214] border border-white/10 rounded-xl px-5 py-3 text-sm focus:outline-none focus:border-[#30cf43]/50 transition-colors text-zinc-300">
                <option value="realtor">Lead Realtor</option>
                <option value="admin">Operations Manager</option>
                <option value="developer">Developer (API Access)</option>
              </select>
            </div>
          </div>

          <label class="flex items-start gap-3 cursor-pointer group mt-4">
            <div class="relative flex items-center">
              <input type="checkbox" v-model="formData.agreeToTerms" class="sr-only peer" />
              <div class="w-5 h-5 border border-white/20 rounded-md peer-checked:bg-[#30cf43] peer-checked:border-[#30cf43] transition-all"></div>
              <svg class="absolute w-3 h-3 text-white scale-0 peer-checked:scale-100 transition-transform left-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span class="text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors leading-snug">
              I accept the data processing protocols and AI analysis terms.
            </span>
          </label>

          <p class="text-center text-xs text-zinc-500">
            Already have a node? <NuxtLink to="/login" class="text-[#30cf43] hover:underline">Access Login</NuxtLink>
          </p>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
/* Smooth manifestation animation */
main {
  animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Custom Select styling for dark mode */
select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%234b5563'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1rem;
}
</style>