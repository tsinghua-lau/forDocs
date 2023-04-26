<template>
  <main class="home-main">
    <p class="text">ForDocs</p>
    <p class="info">
      Front-end learning document collection<br />简洁、优雅、全面
    </p>
    <a class="link" href="/vitepressCn/">Get Started</a>
    <p class="miit">
      <a
        href="https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33038202004525"
        target="_blank"
        rel="noreferrer"
      >
        癸卯年闰二月廿六
      </a>
    </p>
  </main>
</template>

<style scoped lang="scss">
.home-main {
  position: absolute;
  top: -56px;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #2a3e3e url(../images/home-bg.png) no-repeat center bottom;
  background-size: cover;

  .text {
    line-height: 40px;
    font-size: 34px;
    color: #f4f4f5;
    background-image: linear-gradient(
      120deg,
      #adfbda 0,
      #35c3ff 30%,
      #fda399 50%,
      #76d880 70%,
      #f38b90 90%,
      #f7ba51 100%
    );
    background-size: 100%;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(0 0 2rem #000);
  }

  .info {
    margin: 3px 0 30px 0;
    font-size: 14px;
    color: #b1b3b8;
    padding: 5px 20px;
    text-align: center;
  }

  .link {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 38px;
    padding: 0 20px;
    border-radius: 20px;
    // background: rgba(0, 0, 0, 0.2);
    background: hsla(0, 0%, 100%, 0.05);
    font-size: 16px;
    color: #b1b3b8;
    transition: color 0.25s, border-color 0.25s, background-color 0.25s;
  }

  .link:hover {
    opacity: 0.6;
  }

  .miit {
    position: absolute;
    bottom: 0px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-size: 12px;

    a {
      padding: 0 10px;
      color: #73767a;
    }
  }
}
@media (min-width: 960px) {
  .home-main {
    top: -72px;
  }
}
@media (max-width: 640px) {
  .home-main {
    .miit {
      display: block;
      text-align: center;

      a {
        display: block;
        line-height: 18px;
      }
    }
  }
}
</style>
