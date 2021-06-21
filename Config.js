/**
 * @license
 * Copyright 2021 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

 foam.CLASS({
  package: 'foobar',
  name: 'Config',

  documentation: 'Build config',

  constants: [
    {//to properties
      name: 'NANOPAY_HOME',
      value: '/opt/nanopay',
    },
    {
      name: 'HOST_NAME',
      value: 'hostname -s',
    },
    {
      name: 'PROJECT_HOME',
      factory: function() {
        return  __dirname + '/..';
      }
    },
    {
      name: 'LOG_HOME',
      factory: function() {
        return  '';//fix me
      }
    },
    {
      name: 'JOURNAL_HOME',
      factory: function() {
        return  this.PROJECT_HOME + '/journals';
      }
    },
    {
      name: 'JOURNAL_OUT',
      factory: function() {
        return  this.PROJECT_HOME + '/target/journals';
      }
    },
    {
      name: 'DOCUMENT_OUT',
      factory: function() {
        return  this.PROJECT_HOME + '/target/documents';
      }
    },
    {
      name: 'DOCUMENT_HOME',
      factory: function() {
        return  this.PROJECT_HOME + '/documents';
      }
    }
  ],

  properties: [
    {
      class: 'Boolean',
      help: 'Build but don\'t start nanos. Enabled by default',
      name: 'build',
      shortName: 'b',
      value: true
    },
    {
      class: 'Boolean',
      help: 'Enable Medusa clustering.',
      name: 'medusaClustering',
      shortName: 'C'
    },
    {
      class: 'Boolean',
      help: 'Run with JDPA debugging enabled on port 8000.',
      name: 'debugging8000',
      shortName: 'd'
    },
    {
      class: 'Boolean',
      help: 'PORT : JDPA debugging enabled on port PORT.',
      name: 'debuggingPORT',
      shortName: 'D'
    },
    {
      class: 'Boolean',
      help: 'Skipping genJava task..',
      name: 'skipGenJava',
      shortName: 'e'
    },
    {
      class: 'Boolean',
      help: 'EXPLICIT_JOURNALS :',
      name: 'explJournals',
      shortName: 'E'
    },
    {
      class: 'Boolean',
      help: '<rw | ro> : File System Read-Write (default) or Read-Only',
      name: 'fileSystemRO',
      shortName: 'F'
    },
    {
      class: 'Boolean',
      help: 'Build foam.',
      name: 'buildFoam',
      shortName: 'f'
    },
    {
      class: 'Boolean',
      help: 'Output running/notrunning status of daemonized nanos.',
      name: 'outputStatusOfDNanos',
      shortName: 'g'
    },
    {
      class: 'Boolean',
      help: 'Print usage information..',
      name: 'outputHelp',
      shortName: 'h'
    },
    {
      class: 'Boolean',
      help: 'Install npm and git hooks',
      name: 'instalNPMAndGitHooks',
      shortName: 'i'
    },
    {
      class: 'Boolean',
      help: 'Delete runtime journals, build, and run app as usual.',
      name: 'deleteJournals',
      shortName: 'j'
    },
    {
      class: 'Boolean',
      help: 'JOURNAL_CONFIG : additional journal configuration. See find.sh - deployment/CONFIG i.e. deployment/staging"',
      name: 'journalConfig',
      shortName: 'J'
    },
    {
      class: 'Boolean',
      help: 'Package up a deployment tarball.',
      name: 'createTarball',
      shortName: 'k'
    },
    {
      class: 'Boolean',
      help: 'Delete runtime logs.',
      name: 'deleteLogs',
      shortName: 'l'
    },
    {
      class: 'Boolean',
      help: 'Enable Medusa clustering. Not required for \'nodes\'. Same as -C=true"',
      name: 'enableClustering',
      shortName: 'm'
    },
    {
      class: 'Boolean',
      help: '-N NAME : start another instance with given instance name. Deployed to /opt/nanopay_NAME.',
      name: 'nameOfInstance',
      shortName: 'N'
    },
    {
      class: 'Boolean',
      help: 'Enable profiling on default port',
      name: 'enableProfilingOnDefaultPort',
      shortName: 'p'
    },
    {
      class: 'Boolean',
      help: 'PORT : JProfiler connection on PORT"',
      name: 'enableProfilingOnPORT',
      shortName: 'P'
    },
    {
      class: 'Boolean',
      help: 'deployment directories with resources to add to Jar file',
      name: 'deployWithResourcesToAddToJAR',
      shortName: 'R'
    },
    {
      class: 'Boolean',
      help: 'Stop a running daemonized nanos.',
      name: 'stopRunningDeamonizedNanos',
      shortName: 's'
    },
    {
      class: 'Boolean',
      help: 'When debugging, start suspended.',
      name: 'startSuspeneded',
      shortName: 'S'
    },
    {
      class: 'Boolean',
      help: 'Run All tests.',
      name: 'runAllTests',
      shortName: 't'
    },
    {
      class: 'Boolean',
      help: 'testId1,testId2,... : Run listed tests.',
      name: 'runTestsListed',
      shortName: 'T'
    },
    {
      class: 'Boolean',
      help: 'Run from jar. Intented for Production deployments.',
      name: 'runFromJAR',
      shortName: 'u'
    },
    {
      class: 'Boolean',
      help: 'User to run as',
      name: 'runAs',
      shortName: 'U'
    },
    {
      class: 'Boolean',
      help: 'java compile only, no code generation.',
      name: 'compile',
      shortName: 'v'
    },
    {
      class: 'Boolean',
      help: 'VERSION : Updates the project version in POM file to the given version in major.minor.path.hotfix format',
      name: 'updateProjectVersionInPOM',
      shortName: 'V'
    },
    {
      class: 'Boolean',
      help: 'Disable liveScriptBundler service. (development only)',
      name: 'disableLiveScriptBundler',
      shortName: 'w'
    },
    {
      class: 'Boolean',
      help: 'PORT : HTTP Port. NOTE: WebSocketServer will use PORT+1',
      name: 'customHTTPPort',
      shortName: 'W'
    },
    {
      class: 'Boolean',
      help: 'Daemonize into the background, will write PID into $PIDFILE environment variable.',
      name: 'daemonizeInBacground',
      shortName: 'z'
    },
    {
      class: 'Boolean',
      help: 'Check dependencies for known vulnerabilities.',
      name: 'checkDependenciesForVulnerabilities',
      shortName: 'x'
    }
  ],

  actions: [
    {
      help: 'Clean generated code before building.  Required if generated classes have been removed.',
      name: 'clean',
      shortName: 'c',
      code: function() {
        const rimraf = require('rimraf');
        var cleanDirs = [ '/bin', '/lib' ];//TO CONSTANTS

        for ( var dir of cleanDirs ) {
          rimraf(this.NANOPAY_HOME + dir + '/*', function () { console.log('done'); });
        }
      }
    },
    {
      name: 'startNanos',
      code: function() {

      }
    },
    {
      name: 'setup_dirs',
      code: function() {
        const fs = require("fs");
        const rimraf = require('rimraf');

        var dir = this.PROJECT_HOME + './foam';
        if ( ! fs.existsSync(dir)) {
          fs.mkdir(dir);
        }

        dir = this.NANOPAY_HOME + '/lib';
        if ( ! fs.existsSync(dir)) {
          fs.mkdir(dir);
        }

        dir = this.NANOPAY_HOME + '/bin';
        if ( ! fs.existsSync(dir)) {
          fs.mkdir(dir);
        }

        dir = this.NANOPAY_HOME + '/etc';
        if ( ! fs.existsSync(dir)) {
          fs.mkdir(dir);
        }

        dir = this.LOG_HOME;
        if ( ! fs.existsSync(dir)) {
          fs.mkdir(dir);
        }

        dir = this.JOURNAL_HOME;
        if ( ! fs.existsSync(dir)) {
          fs.mkdir(dir);
        }

        dir = this.DOCUMENT_HOME;
        if ( fs.existsSync(dir)) {
          rimraf(dir, function () { console.log('done'); });
        }

        if ( ! fs.existsSync(dir)) {
          fs.mkdir(dir);
        }

        dir = this.DOCUMENT_OUT;
        if ( ! fs.existsSync(dir)) {
          fs.mkdir(dir);
        }
      }
    },
    {
      name: 'deploy_documents',
      code: function() {

      }
    },
    {
      name: 'deploy_journals',
      code: function() {
        var JOURNALS = 'tools/journals';
        const fs = require("fs");
        const fse = require("fs-extra");

        if ( ! fs.existsSync(JOURNALS)) {
          return;
        }

        if ( ! fs.existsSync(JOURNALS + '/target')) {
          fs.mkdir(JOURNALS + '/target');
        }

        if ( ! this.deployWithResourcesToAddToJAR ) {
          console.log('Deploying journals');
          var srcDir = ' deployment/${RESOURCES}/resources/*';
          var outDir;
          if ( this.runFromJAR ) {
            outDir = this.JOURNAL_OUT;
          } else {
            outDir = this.JOURNAL_HOME;
          }

          fse.copySync(srcDir, destDir, function (err) {
            if (err) {
              console.error(err);
            }
          });
        }

        if ( ! this.runFromJAR ) {

        }
      }
    }
  ]
 });