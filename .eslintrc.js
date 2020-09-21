module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    "plugin:vue/recommended"
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
  },
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module"
  }
}
2020-09-21 02:43:49.234 [Thread-4] INFO  [sid=7O69XN81BZU0BMRSBMY0H6DPR, pid=fcbca75ae9a8b7bfc8e63b301b912cc5] com.acellere.corona.scanctrl.core.ParserCtrl - Parser Name: multilangparser
2020-09-21 02:43:49.235 [Thread-4] INFO  [sid=7O69XN81BZU0BMRSBMY0H6DPR, pid=fcbca75ae9a8b7bfc8e63b301b912cc5] com.acellere.corona.scanctrl.core.ParserCtrl - Executable Name: C:\ProgramData\Gamma\corona\mlparser\bin\mlparser.bat
The input line is too long.
The syntax of the command is incorrect.
2020-09-21 02:43:50.236 [Thread-4] ERROR [sid=7O69XN81BZU0BMRSBMY0H6DPR, pid=fcbca75ae9a8b7bfc8e63b301b912cc5] com.acellere.corona.scanctrl.core.ParserCtrl - Error running parser: multilangparser
org.apache.commons.exec.ExecuteException: Process exited with an error: 255 (Exit value: 255)
	at org.apache.commons.exec.DefaultExecutor.executeInternal(DefaultExecutor.java:404) ~[commons-exec-1.3.jar:1.3]
	at org.apache.commons.exec.DefaultExecutor.access$200(DefaultExecutor.java:48) ~[commons-exec-1.3.jar:1.3]
	at org.apache.commons.exec.DefaultExecutor$1.run(DefaultExecutor.java:200) ~[commons-exec-1.3.jar:1.3]
	at java.lang.Thread.run(Unknown Source) [?:1.8.0_171]
